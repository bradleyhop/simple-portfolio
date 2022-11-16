<script>
import { RouterView } from "vue-router";
import SiteFooter from "@/components/SiteFooter.vue";

export default {
  components: {
    RouterView,
    SiteFooter,
  },

  data() {
    return {
      home: null,
    };
  },

  methods: {
    changeLink: function () {
      this.home = !this.home;
    },
  },

  beforeCreate() {
    // set menu based if user goes directly to portfolio or home router view
    // DOESN'T ACTUALLY SOLVE MY ISSUE
    this.home = this.$router.currentRoute === "/portfolio" ? false : true;
  },
};
</script>

<template>
  <nav>
    <ul class="menu-list">
      <!-- only two pages, change menu based on view page -->
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
    <div class="main-container">
      <RouterView />
    </div>
  </main>

  <SiteFooter />
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
      color: $not-black;
      margin-right: 4rem;
      border-top: 3px solid rgba(0, 0, 0, 0);

      &:last-child {
        margin-right: 20vw;
      }

      &:hover {
        border-top: 3px solid $lightest-blue;
      }
    }
  }
}

.main-container {
  background-color: $lightest-blue;
  margin-left: 20vw;
  min-height: 110vh;
}
</style>
