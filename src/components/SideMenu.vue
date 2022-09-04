<template>
  <div>
    <transition
        enter-active-class="animate__animated animate__fadeInRight"
        leave-active-class="animate__animated animate__fadeOutLeft"
    >
      <div class="menu-overlay" :class="{'is-active': isSideMenuOpen}">
        <section class="section is-large">
          <div class="container">
            <h2 class="has-text-weight-bold is-size-3">Navigation</h2>
            <div class="py-3">
              <p v-for="u in listUrls" :key="u.name" class="is-capitalized is-size-5">
                <a v-if="u.ext" class="has-text-light" :href="u.url" target="_blank">
                  {{ u.name }}
                </a>
                <router-link v-else class="has-text-light" :to="u.url" target="_blank">
                  {{ u.name }}
                </router-link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
  computed: {
    isSideMenuOpen() {
      return this.$store.state.show.SideMenu
    },
    listUrls() {
      return this.$store.state.links.Menu
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-overlay {
  background-color: #000;
  background-color: rgba(0,0,0,.95);
  height: 100%;
  width: 0;
  overflow-x: hidden;
  position: fixed;
  right: 0;
  top: 0;
  transition: .5s;
  z-index: 9;
  &.is-active {
    width: 100%
  }
}
</style>