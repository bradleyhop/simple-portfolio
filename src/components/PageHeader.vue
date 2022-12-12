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

<style lang="scss">
$nav-border-line: 3px solid #fff;

.port-header {
  min-height: 35vh;
  background: $lightest-blue;
  margin-bottom: 2rem;

  .port-nav {
    .port-nav-container {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      min-height: 15vh;

      .home-link {
        font-size: 1.5rem;
        border: 3px solid transparent;
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

  .title-container {
    display: flex;
    min-height: 10rem;

    .port-title {
      align-self: flex-end;
      font-size: 2.5rem;
      font-weight: lighter;
      letter-spacing: -1px;
      padding-bottom: 1rem;
    }
  }
}
</style>
