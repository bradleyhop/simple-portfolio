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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            alt="image indicating an outside link"
            viewBox="0 0 24 24"
          >
            <path :d="mdiOpenInNew"></path>
          </svg>
        </a>

        <a
          :href="gitLink"
          class="card-link"
          target="_blank"
          rel="noopener noreferrer"
          title="source code"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path :d="mdiGithub"></path>
          </svg>
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

  .card-title {
    padding: 1rem;
    font-weight: normal;
  }

  .card-img {
    width: inherit;
    object-fit: contain;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    margin-bottom: -5px;
  }

  .bottom-card-container {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;

    .card-body {
      min-height: 4rem;
      display: flex;

      .card-link {
        margin: 1rem 2rem 1rem 1rem;

        & > svg {
          fill: $greenish;
          height: 2.5rem;
          width: 2.5rem;

          &:hover {
            height: 3rem;
            width: 3rem;
            transition-duration: 500ms;
          }
        }
      }
    }
  }
}
</style>
