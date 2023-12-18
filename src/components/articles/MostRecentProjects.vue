<script>
import recents from "@/assets/data/recentProjects.js";
import { mdiOpenInNew } from "@mdi/js";

export default {
  name: "MostRecentProjects",

  data() {
    return {
      mdiOpenInNew,
      projectArticles: Object.freeze(recents),
    };
  },
};
</script>

<template>
  <section class="recents">
    <h2 class="recents-heading">Recent Projects</h2>
    <ul class="recents-list">
      <li
        class="recent-item"
        v-for="article in projectArticles"
        :key="article.id"
      >
        <h3 class="recent-item-heading">{{ article.title }}</h3>
        <p class="recent-item-copy">
          <span class="recent-item-body" v-html="article.body"></span>
          <br />
          <a
            :href="article.link"
            class="linky"
            rel="noopener noreferrer"
            target="_blank"
            :title="article.linkTitle"
          >
            {{ article.linkText }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              alt="image indicating an outside link"
              viewBox="0 0 24 24"
              class="svg-icon"
            >
              <path :d="mdiOpenInNew"></path>
            </svg>
          </a>
        </p>
        <hr class="divider" />
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.recents {
  margin-left: 5vw;
  margin-right: 5%;

  .recents-heading {
    font-size: 2em;
    letter-spacing: 1.5px;
    margin-bottom: 2rem;
  }

  .recents-list {
    list-style: none;
    padding-bottom: 4rem;

    .recent-item {
      font-size: 1.25rem;
      flex-direction: column;
      margin-bottom: 2rem;

      .recent-item-heading {
        color: $green-900;
        letter-spacing: 1px;
        line-height: 150%;
        min-width: 20rem;
        font-weight: bold;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }

      .recent-item-copy {
        letter-spacing: 0.5px;
        line-height: 150%;
        max-width: 80ch;
        margin-bottom: 1rem;
      }

      .linky {
        color: $green-900;
        display: flex;
        margin: 0.25rem 0;

        &:hover {
          text-decoration: underline;
        }

        .svg-icon {
          align-self: center;
          fill: $green-900;
          height: 1.1em;
          margin-left: 0.2rem;
          width: 1.1em;
        }
      }

      .divider {
        border-width: 0;
        background-color: $lightest-blue;
        color: $lightest-blue;
        height: 2px;
        width: 106%; // stylishly extending to the right
      }
    }
  }
}
</style>
