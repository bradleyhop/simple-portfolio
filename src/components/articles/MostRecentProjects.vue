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
  <section class="recents-section">
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
            :title="article.linkText"
          >
            <span class="recent-item-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                alt="image indicating an outside link"
                viewBox="0 0 24 24"
                class="svg-icon"
              >
                <title>open link in a new window</title>
                <path :d="mdiOpenInNew"></path>
              </svg>
              {{ article.linkText }}
            </span>
          </a>
        </p>
        <hr class="divider" />
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/style/color" as *;

.recents-section {
  // margin-left: 5vw;

  .recents-heading {
    font-size: 2em;
    letter-spacing: 1.5px;
    margin-bottom: 2rem;
    padding-right: 0.5rem;
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
        line-height: 1.5;
        min-width: 20rem;
        font-weight: bold;
        font-size: 1.5rem;
        margin: 0 0.5rem 0.5rem 0;
      }

      .recent-item-copy {
        letter-spacing: 0.5px;
        line-height: 1.5;
        max-width: 80ch;
        margin: 0 0.5rem 1rem 0;
      }

      .recent-item-link {
        display: inline-flex;
        align-items: center;
        line-height: 1.5;
        color: $green-900;

        &:hover {
          text-decoration: underline;
        }
      }

      .svg-icon {
        fill: $green-900;
        height: 1.1em;
        margin-right: 0.25em;
        min-width: 1.1em;
      }

      .divider {
        border-width: 0;
        background-color: $lightest-blue;
        height: 4px;
      }
    }
  }
}
</style>
