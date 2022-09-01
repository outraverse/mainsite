<template>
  <section class="section hero is-relative">
    <div class="container is-flex is-vcentered" >
      <div class="is-justify-content-center">
        <h2 class="has-text-light is-size-6 mb-2">Welcome to Outraverse</h2>
        <h1 class="has-text-weight-bold is-size-3 hero-slogan mb-2">Where we can explore, create and build in the digital world</h1>
        <h3 class="has-text-light">Web 2.0 | Web 3.0</h3>
      </div>
    </div>
    <div class="scroll-link has-text-white is-clickable" @click="scrollDown">
      <font-awesome-icon icon="chevron-down" class="fa-fw" /> Scroll Down
    </div>
  </section>
</template>

<script>
import { scrollSmooth } from "@/helpers/animate";

export default {
  name: "Hero",
  methods: {
    scrollDown() {
      scrollSmooth("about-us")
    }
  }
}
</script>

<style lang="scss" scoped>
.section.hero {
  background: url("~@/assets/img/xhero_bg_1.jpg.pagespeed.ic.FRJ9OuBGRG.webp");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  min-height: 600px;
  height: calc(100vh);
  .scroll-link {
    bottom: 2rem;
    display: block;
    position: absolute;
    right: 4rem;
  }
}
.is-vcentered {
  -webkit-box-align: center;
     -ms-flex-align: center;
        align-items: center;
}
@media screen and (min-width: 769px) {
  .section.hero .hero-slogan {
    max-width: 769px
  }
}
</style>