<template>
  <div>
    <transition
        enter-active-class="animate__animated animate__fadeInRight"
        leave-active-class="animate__animated animate__fadeOutLeft"
    >
      <div class="menu-overlay" :class="{'is-active': isSideMenuOpen}">
        <section class="section my-6">
          <div class="container">
            <h2>Navigation</h2>
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