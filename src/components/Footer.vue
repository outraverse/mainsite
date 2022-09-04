<template>
  <footer class="footer has-background-dark has-text-light pb-3">
    <div class="container">
      <div class="content">
        <div class="columns">
          <div class="column">
            Contact
          </div>
          <div class="column">
            Services
          </div>
        </div>
      </div>

      <!-- Copy Right -->
      <p class="has-text-centered">
        <font-awesome-icon icon="copyright" class="fa-fw" /> Copyright <router-link to="/" class="copyright-link animted-underline has-text-light">Outraverse</router-link> {{ copyRightYear }}
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    copyRightYear() {
      const start = 2022;
      let currentYear = new Date().getFullYear();
      let temp = `${start}`;
      if (currentYear > start) {
        temp += ` - ${currentYear}`
      }
      return temp;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/colors.scss";

.copyright-link {  
  background-image: linear-gradient($color-light 0 0);
}
</style>