<script>
export default {
  name: "OutsideLinkButton",

  props: {
    outsideLink: {
      type: String,
      required: true,
    },
    svgPath: {
      type: String,
      required: true,
    },
    buttonTitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <a
    :href="outsideLink"
    target="_blank"
    rel="noopener noreferrer"
    title="live demo"
  >
    <button class="link-button">
      <span class="button-text">{{ buttonTitle }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        alt="opens link in new window"
        viewBox="0 0 24 24"
        class="svg-icon"
      >
        <path :d="svgPath"></path>
      </svg>
    </button>
  </a>
</template>

<style lang="scss" scoped>
button {
  display: flex;
  border: none;
  background-color: $lightest-blue;
  border-radius: 100px;
  font-size: 0.9em;
  padding: 0.75rem 1.5rem;

  &:hover {
    transition: box-shadow 200ms;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
}

.link-button {
  cursor: pointer;

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
