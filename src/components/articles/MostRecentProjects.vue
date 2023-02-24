<script>
import { mdiOpenInNew } from "@mdi/js";

export default {
  name: "MostRecentProjects",

  data: () => ({
    mdiOpenInNew,
  }),
};
</script>

<template>
  <section class="recents">
    <h2 class="recents-heading">Recent Projects</h2>
    <ul class="recents-list">
      <li class="recent-item">
        <h3 class="recent-item-heading">Professional Portfolio</h3>
        <p class="recent-item-copy">
          Update and redesign client's professional portfolio page. Built in
          WordPress with Elementor, custom CSS.<br />
          <a
            href="https://bainstructionaldesign.com"
            class="linky"
            rel="noopener noreferer"
            target="_blank"
            title="Bradley Adamczyk Portfolio"
          >
            Bradley Adamczyk Portfolio
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
      <li class="recent-item">
        <h3 class="recent-item-heading">Plant Facts Site</h3>
        <p class="recent-item-copy">
          A Frontend Mentor project, this is an eight-view SPA fact site for all
          planets in our solar system. Built from a professionally designed
          Figma file using Vue.js 3, Vue Router, Vite, and Sass.<br />
          <a
            href="https://bradleyhop.github.io/frontend-mentor-planet-facts-site/"
            class="linky"
            rel="noopener noreferer"
            target="_blank"
            title="Frontend Mentor Planet Fact Site"
          >
            Frontend Mentor Planet Fact Site
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
    letter-spacing: -0.5px;
    margin-bottom: 1.5rem;
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
        color: $green-900;
        letter-spacing: 0.5px;
        margin-bottom: 1rem;
        min-width: 20rem;
      }

      .recent-item-copy {
        letter-spacing: 0.5px;
        line-height: 150%;
        max-width: 50ch;
      }

      .linky {
        color: $green-900;

        &:hover {
          text-decoration: underline;
        }

        .svg-icon {
          display: inline;
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
