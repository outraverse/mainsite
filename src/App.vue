<template>
  <!-- Header -->
  <NavBar />
  <SideMenu />
  <router-view />
  <Footer />
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SideMenu from "@/components/SideMenu";

export default {
  name: "app",
  components: {
    Footer,
    NavBar,
    SideMenu
}
}
</script>

<style lang="scss">
@import "bulma";
@import "@/assets/styles/app.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
