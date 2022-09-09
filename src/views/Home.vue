<template>
  <div class="home">
    <!-- Hero Section -->
    <Hero />
    <section class="section has-background-info has-text-light is-medium">
      <div class="container has-text-centered">
        <h3 id="about-us" class="is-uppercase">Who we are</h3>
        <h2 class="has-text-weight-bold is-size-2">A hobby turned into a business idea</h2>
        <h3 class="pb-6">Design | Development</h3>
        <hr class="mb-6">
        <div class="columns">
          <div v-for="(w, idx) in who" :key="idx" class="column is-4">
            <div class="box has-background-info has-text-light">
              <h4 class="is-size-4" style="color: #c4a37c">
                {{ "0" + (+idx + 1) }}
              </h4>
              <h5 class="has-text-weight-bold is-size-4 is-uppercase">
                {{ w.label }}
              </h5>
              <p>
                {{ w.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section what-we-do is-medium">
      <div class="container">
        <h2 id="what-we-do" class="has-text-centered is-uppercase">What we Do</h2>
        <h3 class="has-text-centered has-text-weight-bold is-size-2">Design &amp; Code is our passion</h3>
        <hr class="mb-6">
        <div class="columns is-multiline">
          <ServiceCard v-for="i in services" :key="i.label" :info="i" />
        </div>
      </div>
    </section>
    <section class="section p-0 has-background-light">
      <div class="columns m-0 p-0">
        <div class="column is-6 p-0 is-relative">
          <figure class="image">
            <img src="@/assets/img/web2.webp" loading="lazy" />
          </figure>
        </div>
        <div class="column is-6 p-0 has-text-centered">
          <div class="web-tech-2">
            <h4 class="is-size-6 mb-2">Present</h4>
            <h3 class="has-text-weight-bold is-size-4 mb-4">Web 2.0</h3>
            <p>
              Building modern web application requires modern technologies. We utilize VueJS as the main JavaScript framework to build the front end of web applications, we also use alternative solutions such as React and many other libraries.
            </p>
          </div>
        </div>
      </div>
      <div class="columns m-0 p-0">
        <div class="column is-6 p-0 has-text-centered">
          <div class="web-tech-2">
            <h4 class="is-size-6 mb-2">Future</h4>
            <h3 class="has-text-weight-bold is-size-4 mb-4">Web 3.0</h3>
            <p>
              Web 3.0 is not just cryptocurrencies. Blockchain acts like a open access database stores data. It is more secure and transparent than traditional database.
            </p>
          </div>
        </div>
        <div class="column is-6 p-0 is-relative">
          <figure class="image">
            <img src="@/assets/img/web3.webp" loading="lazy" />
          </figure>
        </div>
      </div>
    </section>
    <section class="section is-medium">
      <div class="container has-text-centered">
        <h3 id="about-us" class="is-uppercase">Why Choose Us</h3>
        <h2 class="has-text-weight-bold is-size-2">Let's work together and build a bright future</h2>
        <hr class="mb-6">
        <div class="columns has-text-left">
          <div class="column is-4">
            <p class="is-size-1">
              Design &amp; Code is our passion
            </p>
          </div>
          <div class="column">
            <div class="content">
              <p class="has-text-weight-bold">
                Worry about continous content/style updates?
              </p>
              <p>
                No need. We will update it for you. We can assist you to change the wording and widgets without extra costs; so that you can concentrate on the content creation and new features.
              </p>
            </div>
          </div>
          <div class="column">
            <div class="content">
              <p class="has-text-weight-bold">
                Need to consolidate your data even from Excelsheets?
              </p>
              <p>
                Sure. We will help you to tranfer for data from Excelsheet to a relational database or NoSQL as the product desires.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import ServiceCard from  "@/components/ServiceCard";

export default {
  name: "Home",
  components: {
    Hero,
    ServiceCard
  },
  data() {
    return {
      services: [
        { label: "Web Design", icon: "earth-americas", description: "Front and back end application development, search engine optimization, security analysis, web and graphic design." },
        { label: "Web Development", icon: "file-code", description: "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint." },
        { label: "Database Design", icon: "database", description: "Delivering database solutions encompasses a range of services such as integration, and migration." },
        { label: "Web 3.0", icon: "fa-brands fa-btc", description: "Web 3.0, decentralized application" }
      ],
      who: [
        { label: "Innovation", description: "Interactively brand robust collaboration and idea-sharing rather than dynamic e-tailers" },
        { label: "Creativity", description: "The digital world is only limited from the imagination, not from the technology" },
        { label: "Quality", description: "The digital world is only limited from the imagination, not from the technology" }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.web-tech-2 {
  align-items: center;
  height: 100%;
  justify-content: center;
  padding: 15% 20%;
}
</style>