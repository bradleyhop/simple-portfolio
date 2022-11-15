<template>
  <h1>Bradley Smith</h1>
  <figure class="img-container">
    <img
      src="@/assets/img/meLong.jpg"
      alt="image of Bradley with forest and ocean behind him"
      class="me-img"
    />
    <figcaption class="caption-me">Web Developer</figcaption>
  </figure>
</template>

<style lang="scss">
h1 {
  color: $not-black;
  font-size: 6rem;
  font-weight: 300;
  margin-left: -8rem;
  padding-top: 8rem;
}

.img-container {
  display: flex;
  margin-left: 5vw;
  margin-top: 10vh;

  .me-img {
    height: 50vh;
    width: auto;
  }

  .caption-me {
    color: $greenish;
    font-size: 1rem;
    padding-left: 0.25rem;
    padding-top: 0.5rem;
    transform-origin: top right;
    writing-mode: vertical-rl;
  }
}
</style>
