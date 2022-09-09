<template>
  <section class="section hero is-relative has-background-black">
    <div class="container is-flex is-vcentered" >
      <div class="has-text-white is-justify-content-center">
        <h2 class="is-size-3 mb-2 hero-welcome">Welcome to Outraverse</h2>
        <h1 class="has-text-weight-bold is-size-1 hero-slogan mb-2">Where we can explore, create and build in the digital world</h1>
        <h3 class="has-text-grey-lighter is-size-4">Web 2.0 | Web 3.0</h3>
      </div>
    </div>
    <div>
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
      <defs>
      <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g class="parallax">
      <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
      <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
      <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
      <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
      </g>
      </svg>
    </div>
    <div class="scroll-link has-text-dark is-clickable" @click="scrollDown">
      <font-awesome-icon icon="chevron-down" class="fa-fw" /> <span class="animted-underline">Scroll Down</span>
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
  background: linear-gradient(
          rgba(0, 0, 0, 0.7), 
          rgba(0, 0, 0, 0.7)
        ), url("~@/assets/img/xhero_bg_1.jpg.pagespeed.ic.FRJ9OuBGRG.webp");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 600px;
  height: calc(100vh);
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  .scroll-link {
    bottom: 2rem;
    display: block;
    position: absolute;
    right: 4rem;
  }
}
.waves {
  position:relative;
  width: 100%;
  height:15vh;
  margin-bottom:-7px; /*Fix for safari gap*/
  min-height:100px;
  max-height:150px;
}
/* Animation */
.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
   transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
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