<script>
import { RouterView } from "vue-router";

export default {
  components: {
    RouterView,
  },

  data() {
    return {
      home: true, // 0 for home, 1 for portfolio
    };
  },

  methods: {
    changeLink: function () {
      this.home = !this.home;
    },
  },
};
</script>

<template>
  <nav>
    <ul class="menu-list">
      <li>
        <RouterLink
          v-if="home"
          to="/portfolio"
          @click="changeLink()"
          class="clear-link-dec"
        >
          portfolio
        </RouterLink>
        <RouterLink
          v-if="!home"
          to="/"
          @click="changeLink()"
          class="clear-link-dec"
        >
          home
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
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
nav {
  min-height: 15vh;
  display: flex;
  align-content: center;
  justify-content: flex-end;

  .menu-list {
    list-style: none;
    display: flex;
    align-content: center;
    font-size: 1.25rem;
    align-self: center;

    li {
      margin-right: 2rem;
      border-top: 3px solid rgba(0, 0, 0, 0);

      &:last-child {
        margin-right: 4rem;
      }

      &:hover {
        border-top: 3px solid $lightest-blue;
      }
    }
  }
}

main {
  background-color: $lightest-blue;
  margin-left: 20vw;
  min-height: 110vh;
}
</style>
