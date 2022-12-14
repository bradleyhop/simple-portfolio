<script>
import { RouterLink } from "vue-router";
import MenuList from "@/components/MenuList.vue";

export default {
  name: "PageHeader",

  components: {
    MenuList,
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
      <div class="port-nav-container">
        <RouterLink to="/" class="home-link clear-link-dec" title="to home">
          Bradley Smith
        </RouterLink>
        <MenuList class="port-nav-list" />
      </div>
      <div class="title-container">
        <h1 class="port-title">{{ pageTitle }}</h1>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
$nav-border-line: 3px solid #fff;

.port-header {
  min-height: 25vh;
  background: $lightest-blue;
  margin-bottom: 2rem;

  @include tablet-breakpoint {
    min-height: 30vh;
  }

  .port-nav {
    .port-nav-container {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      min-height: 15vh;

      .home-link {
        font-size: 1.5rem;
        border-top: 3px solid transparent;
        letter-spacing: 1px;

        &:hover {
          border-top: $nav-border-line;
        }
      }

      .port-nav-list {
        // override component styling
        & > li {
          &:hover {
            border-top: $nav-border-line;
          }
        }
      }
    }
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
