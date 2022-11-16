<template>
  <article class="main-info-container">
    <h1>Bradley Smith</h1>
    <figure class="img-container">
      <img
        src="@/assets/img/meLong.jpg"
        alt="image of Bradley with forest and ocean behind him"
        class="me-img"
      />
      <figcaption class="caption-me">Web Developer</figcaption>
    </figure>
    <p class="tagline">I am a web and software developer from Maine.</p>
  </article>
</template>

<style lang="scss">
.main-info-container {
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
      height: auto;
      width: 25rem;
    }

    .caption-me {
      color: $gray-green;
      font-size: 1rem;
      padding-left: 0.25rem;
      padding-top: 0.5rem;
      transform-origin: top right;
      writing-mode: vertical-rl;
    }
  }

  .tagline {
    color: $not-black;
    font-size: 1.5rem;
    padding: 1rem 0 0 27vw;
    width: 50rem;
  }
}
</style>
