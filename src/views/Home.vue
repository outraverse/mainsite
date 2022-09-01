<template>
  <div class="home">
    <!-- Hero Section -->
    <Hero />
    <section class="section has-background-success is-medium">
      <h2 id="about-us">Hello There</h2>
    </section>
    <section class="section is-medium">
      <h2 id="what-we-do">What we Do</h2>
    </section>
  </div>
</template>

<script>
import Hero from "@/components/Hero";

export default {
  name: "Home",
  components: {
    Hero
  }
}
</script>
