<script>
import { RouterLink } from "vue-router";

export default {
  name: "MobileNav",

  components: {
    RouterLink,
  },

  data() {
    return {
      toggleMenu: false, // state of pop-over menu for mobile devices
    };
  },

  methods: {
    // toggle mobile menu
    setMobileMenu: function () {
      this.toggleMenu = !this.toggleMenu;
    },
  },
};
</script>

<template>
  <nav class="mobile-menu-container">
    <button class="mobile-menu-button" @click="setMobileMenu">
      <span class="menu-button-text">menu</span>
    </button>

    <div
      class="mobile-menu-list"
      :class="toggleMenu ? 'animate-menu' : 'remove-menu'"
    >
      <div class="close-button-container">
        <button class="close-button" @click="setMobileMenu">close</button>
      </div>
      <ul class="list-container">
        <li class="mobile-menu-item">
          <RouterLink
            to="/"
            class="clear-link-dec menu-nav-item"
            @click="setMobileMenu"
          >
            home
          </RouterLink>
        </li>
        <li class="mobile-menu-item">
          <RouterLink
            to="/portfolio"
            class="clear-link-dec menu-nav-item"
            @click="setMobileMenu"
          >
            portfolio
          </RouterLink>
        </li>
        <li class="mobile-menu-item">
          <RouterLink
            to="/contact"
            class="clear-link-dec menu-nav-item"
            @click="setMobileMenu"
          >
            contact
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.mobile-menu-container {
  display: flex;
}

.mobile-menu-button {
  appearance: none;
  background: none;
  cursor: pointer;

  .menu-button-text {
    color: $not-black;
    font-size: 1.25rem;
    padding: 2px 5px;
  }
}

.list-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  align-items: center;
  justify-content: center;
  margin-top: -6vh;
  margin-top: -6dvh;
}

.mobile-menu-list {
  background-color: $lightest-blue;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9001;
  overflow-x: hidden;
  transition: 200ms;

  .close-button-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    min-height: 6vh;
    min-height: 6dvh;

    .close-button {
      color: $not-black;
      cursor: pointer;
      font-size: 1.25rem;
      padding: 2px 5px;
      margin-right: 5%;
    }
  }

  .mobile-menu-item {
    cursor: pointer;
    list-style: none;
    font-size: 1.75rem;
    letter-spacing: 6px;
    margin: 1.5rem 0;
    transition: 200ms;
  }
}

.animate-menu {
  width: 100vw;
  width: 100dvw;
}

.remove-menu {
  width: 0vw;
  width: 0dvw;
}
</style>
