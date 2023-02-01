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
      <RouterLink to="/contact" class="clear-link-dec" title="to contact">
        contact
      </RouterLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.menu-list {
  display: flex;
  align-items: center;
  font-size: 1rem;
  list-style: none;

  @include tablet-breakpoint {
    font-size: 1.25rem;
  }

  li {
    margin-right: 2rem;

    @include tablet-breakpoint {
      margin-right: 4rem;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  a {
    border-top: 3px solid transparent;
    color: $not-black;

    &:hover {
      border-top: 3px solid $lightest-blue;
    }
  }
}
</style>
