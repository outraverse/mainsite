<template>
  <div class="content has-text-white">
    <h2 class="has-text-centered has-text-weight-bold is-size-2">
      Contact Us
    </h2>
    <div class="columns">
      <div class="column is-4">
        <div class="field">
          <label class="label is-sr-only" for="contact-name">Name</label>
          <div class="control">
            <input
              id="contact-name"
              class="input"
              :class="{'is-danger': v$.form.name.$error}"
              placeholder="Name *"
              v-model="form.name"
            >
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="field">
          <label class="label is-sr-only" for="contact-email">Email</label>
          <div class="control">
            <input
              id="contact-email"
              class="input"
              :class="{'is-danger': v$.form.email.$error}"
              placeholder="Email *"
              v-model="form.email"
            >
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="field">
          <label class="label is-sr-only" for="contact-subject">Subject</label>
          <div class="control">
            <input
              id="contact-subject"
              class="input"
              :class="{'is-danger': v$.form.subject.$error}"
              placeholder="Subject *"
              v-model="form.subject"
            >
          </div>
        </div>
      </div>
    </div>
    <div class="field">
      <label class="label is-sr-only" for="contact-message">Message</label>
      <div class="control">
        <textarea
          id="contact-message"
          class="textarea"
          :class="{'is-danger': v$.form.message.$error}"
          maxlength="500"
          placeholder="Message *"
          v-model="form.message"
        ></textarea>
      </div>
    </div>
    <div class="field">
      <button class="button" @click="Send">
        Send
      </button>
    </div>
  </div>
</template>

<script>
import { Ajax, errShow, rsltCompare } from "@/helpers/ajax";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
import { objClone } from "@/helpers/objects";
import { required, email } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

const formData = {
  email: "",
  message: "",
  name: "",
  subject: ""
}

export default {
  name: "Contact",
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      form: {},
      isPassing: false
    }
  },
  methods: {
    // reset form data
    Reset() {
      this.form = objClone(formData);
    },
    // convert body to plain text
    Sanitize(data) {
      var div = document.createElement("div");
      div.innerHTML = data;
      return div.textContent || div.innerText || "";
    },
    Send() {
      this.v$.form.$touch();
      if (this.v$.form.$error) {
        const errMsg = errShow({
          message: "Form fields cannot be empty or invalid",
          status: "warning"
        });
        createToast(errMsg.message, {
          showIcon: true,
          type: errMsg.status,
          position: "bottom-right"
        })
        return;
      }
      else {
        let dataset = objClone(this.form);
            dataset.message = this.Sanitize(dataset.message);
        Ajax({
          data: this.form,
          url: "mail"
        }, result => {
          console.log(result)
          if (rsltCompare(result.code, [1])) {
            this.Reset()
          }
          createToast(result.message, {
            showIcon: true,
            type: result.status,
            position: "bottom-right"
          })
        })
      }
    }
  },
  validations() {
    return {
      form: {
        message: { required },
        email: { required, email },
        name: { required },
        subject: { required },
      }
    }
  }
}
</script>
