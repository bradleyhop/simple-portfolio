<script>
import MenuList from "@/components/MenuList.vue";
import SiteFooter from "@/components/SiteFooter.vue";

export default {
  components: {
    MenuList,
    SiteFooter,
  },
};
</script>

<template>
  <header class="device-widths">
    <nav class="home-nav">
      <MenuList />
    </nav>
  </header>

  <main>
    <div class="main-container">
      <article class="main-info-container">
        <h1 class="my-name">Bradley Smith</h1>
        <figure class="img-container">
          <img
            src="@/assets/img/meLong.jpg"
            alt="image of Bradley with forest and ocean behind him"
            class="me-img"
          />
          <figcaption class="caption-me">Web Developer</figcaption>
        </figure>
        <p class="tagline">
          I am a web and software developer living in Maine.
        </p>
      </article>
    </div>
  </main>

  <SiteFooter class="home-footer" />
</template>

<style lang="scss">
$shift-left: 20vw;

.home-nav {
  min-height: 15vh;
  display: flex;
  align-content: center;
  justify-content: flex-end;
}

.main-container {
  background-color: $lightest-blue;
  margin-left: $shift-left;
  min-height: 110vh;
}

.main-info-container {
  .my-name {
    color: $not-black;
    font-size: 6rem;
    font-weight: 300;
    letter-spacing: 2px;
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
    padding: 1rem 0 5rem 5vw;
  }
}

.home-footer {
  padding-left: $shift-left !important; // override .device-widths
}
</style>
