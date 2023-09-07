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
    <div class="port-nav device-widths">
      <!-- tablet< navigation -->
      <nav class="port-nav-container">
        <RouterLink
          to="/"
          class="home-link clear-link-dec"
          title="Back to home"
        >
          Bradley Smith
        </RouterLink>
        <div class="menu-list-container">
          <MenuList class="port-nav-list" />
        </div>
        <!-- mobile-only navigation -->
        <div class="mobile-nav">
          <MobileNav />
        </div>
      </nav>
      <!-- page title -->
      <div class="title-container">
        <h1 class="port-title">{{ pageTitle }}</h1>

        <!-- portfolio sub-navigation -->
        <nav v-if="pageTitle === 'Portfolio'" class="port-subnav">
          <ul class="port-nav-list sub-nav-list">
            <li>
              <a
                href="#portFeatured"
                class="clear-link-dec"
                title="featured projects"
              >
                featured
              </a>
            </li>
            <li>
              <a
                href="#portFrontendMentor"
                class="clear-link-dec"
                title="Frontend Mentor Projects"
              >
                Frontend Mentor
              </a>
            </li>
            <li>
              <a
                href="#portFCC"
                class="clear-link-dec"
                title="freeCodeCamp learning platform"
              >
                freeCodeCamp
              </a>
            </li>
            <li>
              <a
                href="#portExtra"
                class="clear-link-dec"
                title="non-platform-specific projects"
              >
                extracurricular
              </a>
            </li>
          </ul>
        </nav>
        <!-- end portfolio sub-navigation -->
      </div>
    </div>
  </header>
</template>

<style lang="scss">
$nav-border-line: 3px solid #fff;

[id] {
  scroll-margin-top: 1rem;
}

.port-header {
  background: $lightest-blue;
  margin-bottom: 2rem;
}

.port-nav-container {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 6vh;
  min-height: 6dvh;

  @include tablet-breakpoint {
    min-height: 10vh;
    min-height: 10dvh;
  }

  .home-link {
    font-size: 1.5rem;
    border-top: 3px solid transparent;
    letter-spacing: 1px;

    &:hover {
      border-top: $nav-border-line;
    }
  }
}

.port-nav-list {
  // override MenuList component styling
  & > li > a:hover {
    border-top: $nav-border-line !important;
  }
}

.menu-list-container {
  display: none;

  @include tablet-breakpoint {
    display: flex;
  }
}

.mobile-nav {
  min-height: 6vh;
  min-height: 6dvh;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @include tablet-breakpoint {
    display: none;
  }
}

.title-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 5rem;

  @include tablet-breakpoint {
    min-height: 8rem;
  }

  .port-title {
    font-size: 2rem;
    font-weight: lighter;
    letter-spacing: -1px;
    padding-bottom: 1.5rem;

    @include tablet-breakpoint {
      font-size: 2.5rem;
    }
  }
}

.sub-nav-list {
  display: flex;
  flex-direction: row;
  list-style: none;
  padding-bottom: 1.5rem;
  font-size: 0.85rem;
  width: 100%;
  justify-content: space-evenly;

  @include tablet-breakpoint {
    font-size: 0.95rem;
    width: initial;
    justify-content: flex-start;

    & > li {
      padding-right: 1.5rem;
    }
  }
}
</style>
