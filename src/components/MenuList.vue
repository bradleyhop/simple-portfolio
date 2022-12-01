<script>
import { RouterLink } from "vue-router";

export default {
  name: "MenuList",

  components: {
    RouterLink,
  },
};
</script>

<template>
  <ul class="menu-list">
    <li>
      <RouterLink to="/portfolio" class="clear-link-dec">
        portfolio
      </RouterLink>
    </li>
    <li>
      <a
        href="mailto:bradleywjsmith@gmail.com"
        class="clear-link-dec"
        title="email me!"
      >
        contact
      </a>
    </li>
    <li>
      <a
        href="https://github.com/bradleyhop"
        target="_blank"
        rel="noreffer noopener"
        class="clear-link-dec"
        title="my github repo homepage"
      >
        @bradleyhop
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.menu-list {
  align-content: center;
  align-self: center;
  display: flex;
  font-size: 1.25rem;
  list-style: none;

  li {
    border: 3px solid transparent;
    color: $not-black;
    margin-right: 4rem;

    &:hover {
      border-top: 3px solid $lightest-blue;
    }
  }
}
</style>
