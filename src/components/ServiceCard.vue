<template>
  <div class="column is-6 pb-6">
    <div class="media">
      <div class="media-left">
        <font-awesome-icon :icon="info.icon" class="fa-fw is-size-2" />
      </div>
      <div class="media-content">
        <div class="content">
          <h4>{{ info.label }}</h4>
          <p>
            {{ info.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceCard",
  props: {
    info: {type: Object, default: () => {
      return {
        label: "Default Label",
        icon: "",
        description: "blah, blah..."
      }
    }}
  }
}
</script>