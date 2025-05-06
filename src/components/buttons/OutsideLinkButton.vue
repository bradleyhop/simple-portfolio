<script setup>
const props = defineProps({
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
});
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
        <title>opens link in new window</title>
        <path :d="svgPath"></path>
      </svg>
    </button>
  </a>
</template>

<style lang="scss" scoped>
@use "@/assets/style/color" as *;

.link-button {
  cursor: pointer;
  display: flex;
  border: none;
  background-color: $green-900;
  border-radius: 100px;
  font-size: 0.9em;
  padding: 0.5rem 1rem;
  transition: box-shadow 200ms ease-in;

  &:hover {
    box-shadow:
      0 3px 6px rgba(0, 0, 0, 0.16),
      0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .button-text {
    align-self: center;
    color: $not-white;
    font-weight: bold;
    padding-right: 4px;
  }

  .svg-icon {
    fill: $not-white;
    height: 1.4em;
    width: 1.4em;
  }
}
</style>
