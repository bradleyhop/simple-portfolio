<script>
import { mdiOpenInNew } from "@mdi/js";

export default {
  name: "MostRecentProjects",

  data: () => ({
    mdiOpenInNew,
    projectArticles: Object.freeze([
      {
        id: 1,
        title: "Expense Chart Component",
        body: `A Frontend Mentor Project, this is a expense report with a bar
          chart. The data is loaded via local json and the chart is drawn using
          only CSS. Built from a professionally designed Figma file using Vue,
          Vite, and Sass.`,
        link: "https://github.com/bradleyhop/frontend-mentor-expenses-chart-component",
        linkTitle: "Fronent Mentor Expense Chart Component",
        linkText: "Frontend Mentor Expense Chart Component",
      },
      {
        id: 2,
        title: "Professional Portfolio",
        body: `Update and redesign client's professional portfolio page. Built
          in WordPress with Elementor, custom CSS.`,
        link: "https://bainstructionaldesign.com",
        linkTitle: "Bradley Adamczyk Portfolio",
        linkText: "Bradley Adamczyk Portfolio",
      },
      {
        id: 3,
        title: "Plant Facts Site",
        body: `A Frontend Mentor project, this is an SPA fact site for planets
          in our solar system. Built from a professionally designed Figma file
          using Vue.js 3, Vue Router, Vite, and Sass.`,
        link: "https://bradleyhop.github.io/frontend-mentor-planet-facts-site/",
        linkTitle: "Frontend Mentor Planet Fact Site",
        linkText: "Frontend Mentor Planet Fact Site",
      },
    ]),
  }),
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
          {{ article.body }}
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
      display: flex;
      font-size: 1.25rem;
      flex-direction: column;
      margin-bottom: 2rem;

      @include tablet-breakpoint {
        flex-direction: row;
      }

      .recent-item-heading {
        letter-spacing: 1px;
        line-height: 150%;
        min-width: 20rem;
        font-weight: bold;
      }

      .recent-item-copy {
        letter-spacing: 0.5px;
        line-height: 150%;
        max-width: 50ch;
      }

      .linky {
        color: $green-900;
        display: flex;

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
    }
  }
}
</style>
