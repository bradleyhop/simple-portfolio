<script>
// load icons
import { mdiOpenInNew, mdiGithub } from "@mdi/js";

export default {
  name: "PortCard",

  data: () => ({
    // mdi icons
    mdiOpenInNew,
    mdiGithub,
  }),

  props: {
    imgSrc: {
      type: String,
      default: "",
    },
    imgAlt: {
      type: String,
      default: "",
    },
    cardTitle: {
      type: String,
      default: "",
    },
    cardDesc: {
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
  },
};
</script>

<template>
  <div class="port-card-container">
    <img class="card-img" :src="imgSrc" :alt="imgAlt" />
    <div class="bottom-card-container">
      <h2 class="card-title">{{ cardTitle }}</h2>
      <p class="card-desc">{{ cardDesc }}</p>
      <div class="link-container">
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
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.port-card-container {
  border-radius: 4px;
  width: 15rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

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
      margin: 1rem;
      text-align: left;
    }

    .card-desc {
      font-size: 0.8rem;
      padding: 0 1rem;
      margin-bottom: 1rem;
    }

    .link-container {
      display: flex;
      justify-content: space-around;
      align-items: center;
      min-height: 3rem;
      padding-bottom: 0.5rem;
      margin-bottom: 1rem;

      .card-link {
        text-decoration: none;

        .link-button {
          display: flex;
          border: none;
          background-color: $lightest-blue;
          border-radius: 100px;
          cursor: pointer;
          font-size: 0.75rem;
          padding: 0.5rem 0.75rem;

          &:hover {
            transition: box-shadow 200ms;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
          }

          .button-text {
            align-self: center;
            color: $not-black;
            padding-right: 4px;
          }

          .svg-icon {
            fill: $not-black;
            height: 1.4em;
            width: 1.4em;
          }
        }
      }
    }
  }
}
</style>
