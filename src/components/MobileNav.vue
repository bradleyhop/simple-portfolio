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
  <nav class="mobile-menu">
    <button class="mobile-menu-button" @click="setMobileMenu()">
      <span class="menu-button-text"> menu </span>
    </button>
    <!-- mobile menu  -->
    <div>
      <ul v-if="toggleMenu" class="mobile-menu-list">
        <li class="mobile-menu-item">
          <RouterLink to="/" class="clear-link-dec menu-nav-item">
            home
          </RouterLink>
        </li>
        <li class="mobile-menu-item">
          <RouterLink to="/portfolio" class="clear-link-dec menu-nav-item">
            portfolio
          </RouterLink>
        </li>
        <li class="mobile-menu-item">
          <RouterLink to="/contact" class="clear-link-dec menu-nav-item">
            contact
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.mobile-menu-button {
  appearance: none;
  background: none;
  border: none;
  cursor: pointer;
  .menu-button-text {
    color: $not-black;
  }
}

.mobile-menu-list {
  background-color: $lightest-blue;
  left: 0;
  list-style: none;
  list-style-position: inside;
  min-height: 100vh;
  position: absolute;
  top: 5vh;
  width: 100vw;
  z-index: 9001;
  animation: sliding 300ms forwards;

  @keyframes sliding {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  .mobile-menu-item {
    border-bottom: 1px solid $gray-50;
    cursor: pointer;
    display: flex;
    justify-content: center;
    font-size: 1.07rem;
    line-height: 1.79rem;
    padding: 0 2.29rem 0 1.71rem;
    padding: 1.43rem 0;
  }
}
</style>
