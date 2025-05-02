<script setup>
import MenuList from "@/components/menu/MenuList.vue";
import MobileNav from "@/components/menu/MobileNav.vue";

const props = defineProps({
  pageTitle: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <header class="port-header">
    <div class="port-nav device-widths">
      <!-- tablet and larger viewports navigation -->
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
        <!-- mobile only navigation -->
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
@use "@/assets/style/main" as *;
@use "@/assets/style/color" as *;

$nav-border-line: 3px solid #fafafa;

[id] {
  scroll-margin-top: 1rem;
}

.port-header {
  background: $lightest-blue;
  margin-bottom: 2rem;
  max-width: 100%;
  overflow: hidden;
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
  margin-top: 1.25rem;

  @include tablet-breakpoint {
    margin-top: 1.5rem;
  }

  .port-title {
    font-size: 2rem;
    font-weight: lighter;
    letter-spacing: -1px;
    padding-bottom: 1.5rem;
    color: $green-900;

    @include tablet-breakpoint {
      font-size: 2.5rem;
    }
  }
}

.sub-nav-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.75rem;
  list-style: none;
  padding-bottom: 1.5rem;
  font-size: 0.85rem;
  width: 100%;

  @include tablet-breakpoint {
    display: inline-flex;
    font-size: 0.95rem;
    width: initial;
    justify-content: flex-start;

    & > li {
      padding-right: 1.5rem;
    }
  }
}
</style>
