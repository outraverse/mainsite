<template>
  <nav id="menu-icon" class="menu is-unselectable" :class="cssClass" role="navigation" aria-label="main navigation">
    <span class="is-uppercase is-size-6 pr-3 menu-label">
      Menu
    </span>
    <a role="button" class="menu-burger" aria-label="menu" aria-expanded="false" @click="toggleMenu">
      <font-awesome-icon icon="bars" class="fa-fw has-text-white is-size-5" />
    </a>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    isSideMenuOpen() {
      return this.$store.state.show.SideMenu
    }
  },
  data() {
    return {
      cssClass: ""
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    /*** toggle between full/mini sidemenu ***/
    toggleMenu() {
      this.$store.commit("show/UpdExpand", {
        cat: "SideMenu",
        value: !this.isSideMenuOpen
      });
      this.handleScroll()
    },
    /*** change css class when scroll down 10px ***/
    handleScroll() {
      let currentScrollPos = window.pageYOffset;
      if (currentScrollPos < 10) {
        this.cssClass = "";
      }
      else if (this.isSideMenuOpen) {
        this.cssClass = "has-background-menu has-sidemenu-open"
      }
      else {
        this.cssClass = "has-background-menu";
      }
      this.prevScrollpos = currentScrollPos;
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  background-color: transparent;
  padding: 1rem;
  position: fixed;
  right: 1rem;
  top: 1rem;
  transition: all 0.5s ease-out;
  z-index: 10;
  &.has-background-menu {
    background-color: #000;
    background-color: rgba(0, 0, 0, 0.85);
    &.has-sidemenu-open {
      background-color: transparent
    }
    .menu-label {
      color: white
    }
  }
}
</style>