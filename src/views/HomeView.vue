<script>
import MenuList from "@/components/menu/MenuList.vue";
import SiteFooter from "@/components/persistent/SiteFooter.vue";

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
      <!-- no mobile menu on homepage -->
      <MenuList />
    </nav>
  </header>

  <main>
    <div class="main-container">
      <article class="main-info-container">
        <h1 class="my-name">Bradley Smith</h1>
        <figure class="img-container">
          <picture>
            <source
              type="image/webp"
              :srcset="`./img/profilePic-250.webp 250w, ./img/profilePic-350.webp 350w`"
            />
            <source
              type="image/jpg"
              :srcset="`./img/profilePic-250.jpg 250w, ./img/profilePic-350.jpg 350w`"
            />
            <img
              :src="`./img/profilePic-350.jpg`"
              alt="profile picture of Bradley Smith"
              class="me-img"
            />
          </picture>
          <figcaption class="caption-me">Web Development</figcaption>
        </figure>

        <p class="tagline">
          I am a web and software developer<br />
          living in Maine.
        </p>
      </article>
    </div>
  </main>

  <SiteFooter class="home-footer" />
</template>

<style lang="scss">
$shift-left: 25vw;
$shift-left-mobile: 15vw;
$shift-content-left: 5vw;

.home-nav {
  display: flex;
  justify-content: flex-end;
  min-height: 8vh;

  @include tablet-breakpoint {
    min-height: 15vh;
  }
}

.main-container {
  background-color: $lightest-blue;
  margin-left: $shift-left-mobile;

  @include tablet-breakpoint {
    margin-left: $shift-left;
  }
}

.main-info-container {
  .my-name {
    color: $not-black;
    font-size: 3rem;
    letter-spacing: 1.5px;
    position: relative;
    padding-top: 2rem;
    right: 2.5rem;

    @include tablet-breakpoint {
      font-size: 5rem;
      letter-spacing: 2.5px;
      padding-top: 4rem;
      right: 10rem;
    }
  }

  .img-container {
    display: flex;
    padding-left: $shift-content-left;
    margin-top: 4rem;

    @include tablet-breakpoint {
      margin-top: 5rem;
    }

    .me-img {
      // set to actual image dimensions
      width: 250px;
      height: 296px;

      @include tablet-breakpoint {
        width: 350px;
        height: 415px;
      }
    }

    .caption-me {
      color: $green-900;
      font-size: 1rem;
      letter-spacing: -0.5px;
      padding: 0.25rem 0 0 0.25rem;
      transform-origin: top right;
      writing-mode: vertical-rl;
    }
  }

  .tagline {
    color: $not-black;
    font-size: 1.2rem;
    letter-spacing: 1px;
    line-height: 1.75rem;
    margin-right: 2.5%;
    padding: 2rem 0 4rem $shift-content-left;
    max-width: 30rem;

    @include tablet-breakpoint {
      position: relative;
      margin-left: 14rem;
      margin-right: 0;
      padding-top: 3rem;
    }
  }
}

.home-footer {
  padding-left: $shift-left-mobile !important;

  @include tablet-breakpoint {
    padding-left: $shift-left !important;
  }
}
</style>
