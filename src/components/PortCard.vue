<script>
// load icons
import { mdiOpenInNew } from "@mdi/js";
import { mdiGithub } from "@mdi/js";

export default {
  name: "PortCard",

  data: () => ({
    // mdi icons
    mdiOpenInNew,
    mdiGithub,
  }),

  props: {
    cardTitle: {
      type: String,
      default: "",
    },
    liveLink: {
      type: String,
      default: "",
    },
    gitLink: {
      type: String,
      default: "",
    },
    imgSrc: {
      type: String,
      default: "",
    },
    imgAlt: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <div class="port-card-container">
    <img class="card-img" :src="imgSrc" :alt="imgAlt" />
    <div class="bottom-card-container">
      <h2 class="card-title">{{ cardTitle }}</h2>
      <p class="card-body">
        <a
          :href="liveLink"
          class="card-link"
          target="_blank"
          rel="noopener noreferrer"
          title="live demo"
        >
          <button class="link-button">
            <span class="button-text">Live Site</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              alt="image indicating an outside link"
              viewBox="0 0 24 24"
              class="svg-icon"
            >
              <path :d="mdiOpenInNew"></path>
            </svg>
          </button>
        </a>

        <a
          :href="gitLink"
          class="card-link"
          target="_blank"
          rel="noopener noreferrer"
          title="source code"
        >
          <button class="link-button">
            <span class="button-text">GitHub Repo</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden="true"
              viewBox="0 0 24 24"
              class="svg-icon"
            >
              <path :d="mdiGithub"></path>
            </svg>
          </button>
        </a>
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.port-card-container {
  border-radius: 4px;
  margin: 1rem;
  width: 20rem;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 12%);

  &:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transform: scale(1.07);
    transition-duration: 200ms;
  }

  .card-img {
    height: 11rem;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    object-fit: cover;
    width: inherit;
  }

  .bottom-card-container {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;

    .card-title {
      color: $not-black;
      font-weight: normal;
      letter-spacing: -1px;
      margin: 1rem 0 1rem 1rem;
      text-align: left;
    }

    .card-body {
      display: flex;
      justify-content: space-around;
      align-items: center;
      min-height: 3rem;
      margin-bottom: 0.5rem;

      .card-link {
        text-decoration: none;

        .link-button {
          display: flex;
          border: none;
          background-color: $lightest-blue;
          border-radius: 100px;
          cursor: pointer;
          font-size: 1rem;
          padding: 0.5rem 1rem;

          &:hover {
            transform: scale(1.1);
            transition-duration: 200ms;
          }

          .button-text {
            align-self: center;
            color: $not-black;
            padding-right: 4px;
          }

          .svg-icon {
            fill: $not-black;
            height: 1.5em;
            width: 1.5em;
          }
        }
      }
    }
  }
}
</style>
