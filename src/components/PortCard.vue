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
    <h2 class="card-title">{{ cardTitle }}</h2>
    <p class="card-body">
      <a
        :href="liveLink"
        target="_blank"
        rel="noopener noreferrer"
        title="live demo"
      >
        <span class="icon-link card-link"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-hidden="true"
          >
            <path :d="mdiOpenInNew"></path></svg
        ></span>
      </a>

      <a
        :href="gitLink"
        target="_blank"
        rel="noopener noreferrer"
        title="source code"
      >
        <span class="icon-link card-link"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-hidden="true"
          >
            <path :d="mdiGithub"></path></svg
        ></span>
      </a>
    </p>
  </div>
</template>

<style lang="scss">
.port-card-container {
  margin: 1rem;
  width: 20rem;

  .card-img {
    max-width: 20rem;
  }
  .card-link {
    margin: 0;
    margin-right: 0.875rem;
  }

  .card-body {
    display: flex;
    justify-content: space-around;
  }
}
</style>
