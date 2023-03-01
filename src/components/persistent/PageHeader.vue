<script>
import { RouterLink } from "vue-router";
import MenuList from "@/components/menu/MenuList.vue";
import MobileNav from "@/components/menu/MobileNav.vue";

export default {
  name: "PageHeader",

  components: {
    MenuList,
    MobileNav,
    RouterLink,
  },

  props: {
    pageTitle: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <header class="port-header">
    <nav class="port-nav device-widths">
      <!-- tablet< navigation -->
      <div class="port-nav-container">
        <RouterLink to="/" class="home-link clear-link-dec" title="Back to home">
          Bradley Smith
        </RouterLink>
        <div class="menu-list-container">
          <MenuList class="port-nav-list" />
        </div>
        <!-- mobile-only navigation -->
        <div class="mobile-nav">
          <MobileNav />
        </div>
      </div>
      <!-- page title -->
      <div class="title-container">
        <h1 class="port-title">{{ pageTitle }}</h1>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
$nav-border-line: 3px solid #fff;

.port-header {
  background: $lightest-blue;
  margin-bottom: 2rem;
  min-height: 17dvh;
  min-height: 17vh;

  @include tablet-breakpoint {
    min-height: 25dvh;
    min-height: 25vh;
  }

  @include desktop-breakpoint {
    min-height: 30dvh;
    min-height: 30vh;
  }
}

.port-nav-container {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 6dvh;
  min-height: 6vh;

  @include tablet-breakpoint {
    min-height: 10dvh;
    min-height: 10vh;
  }

  .home-link {
    font-size: 1.5rem;
    border-top: 3px solid transparent;
    letter-spacing: 1px;

    &:hover {
      border-top: $nav-border-line;
    }
  }

  .port-nav-list {
    // override MenuList component styling
    & > li > a:hover {
      border-top: $nav-border-line !important;
    }
  }
}

.menu-list-container {
  display: none;

  @include tablet-breakpoint {
    display: flex;
  }
}

.mobile-nav {
  min-height: 6dvh;
  min-height: 6vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @include tablet-breakpoint {
    display: none;
  }
}

.title-container {
  display: flex;
  align-items: flex-end;
  min-height: 5rem;

  @include tablet-breakpoint {
    min-height: 8rem;
  }

  .port-title {
    font-size: 2rem;
    font-weight: lighter;
    letter-spacing: -1px;

    @include tablet-breakpoint {
      font-size: 2.5rem;
    }
  }
}
</style>
