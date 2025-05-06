<template>
  <ul class="menu-list">
    <li>
      <RouterLink
        to="/portfolio"
        class="clear-link-dec"
        title="See samples of my work"
      >
        portfolio
      </RouterLink>
    </li>
    <li>
      <RouterLink
        to="/contact"
        class="clear-link-dec menu-title"
        title="Send me an email"
      >
        contact
      </RouterLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@use "@/assets/style/main" as *;
@use "@/assets/style/color" as *;

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
    text-transform: lowercase;

    @include tablet-breakpoint {
      margin-right: 4rem;
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
