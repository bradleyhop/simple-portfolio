<script>
import { mdiOpenInNew } from "@mdi/js";

export default {
  name: "LiveLinkButton",

  data: () => ({
    mdiOpenInNew, // mdi icon
  }),

  props: {
    externalLink: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <button class="link-button">
    <a
      :href="externalLink"
      class="clear-link-dec"
      target="_blank"
      rel="noopener noreferrer"
      title="live demo"
    >
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
    </a>
  </button>
</template>

<style lang="scss" scoped>
.link-button {
  cursor: pointer;

  a {
    display: flex;
    border: none;
    background-color: $lightest-blue;
    border-radius: 100px;
    font-size: 0.8rem;
    padding: 0.5rem 0.75rem;

    &:hover {
      transition: box-shadow 200ms;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }
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
</style>
