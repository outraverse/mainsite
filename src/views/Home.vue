<template>
  <div class="home">
    <!-- Hero Section -->
    <Hero />
    <section class="section has-background-success is-medium">
      <div class="container has-text-centered">
        <h3 id="about-us" class="is-uppercase">Who we are</h3>
        <h2 class="has-text-weight-bold is-size-2">A hobby turned into a business idea</h2>
        <h3 class="pb-6">Design | Development</h3>
        <div class="columns">
          <div v-for="(w, idx) in who" :key="idx" class="column is-4">
            <div class="box has-background-success">
              <h4 class="is-size-4">
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
    <section class="section is-medium">
      <div class="container has-background-light p-6">
        tewt
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
