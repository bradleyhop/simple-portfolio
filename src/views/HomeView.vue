<script>
import MenuList from "@/components/menu/MenuList.vue";
import MostRecentProjects from "@/components/articles/MostRecentProjects.vue";
import SiteFooter from "@/components/persistent/SiteFooter.vue";

export default {
  components: {
    MenuList,
    SiteFooter,
    MostRecentProjects,
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
          <!-- webp images are preloaded in the <head>. jpg given as backup -->
          <picture>
            <!-- Lighthouse wants a higher res picture for Best Practices
                 Cellphones have a high pixel density, hence double desktop
                 width
            -->
            <source
              type="image/webp"
              :srcset="`./img/me-long-500.webp 250w`"
              media="(max-width: 600px)"
            />
            <source
              type="image/webp"
              :srcset="`./img/me-long-325.webp 325w`"
              media="(min-width: 600.1px)"
            />
            <source
              type="image/jpg"
              :srcset="`./img/me-long-500.jpg 250w`"
              media="(max-width: 600px)"
            />
            <source
              type="image/jpg"
              :srcset="`./img/me-long-325.jpg 325w`"
              media="(min-width: 600.1px)"
            />
            <img
              :src="`./img/me-long-325.jpg`"
              alt="profile picture of Bradley Smith"
              class="me-img"
            />
          </picture>
          <figcaption class="caption-me">Web Development</figcaption>
        </figure>

        <p class="tagline">
          I am a front end web developer specializing in the Vue.js development
          environment.
        </p>
      </article>

      <div class="recent-project-container">
        <MostRecentProjects />
      </div>
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
  min-height: 8dvh;

  @include tablet-breakpoint {
    min-height: 10vh;
    min-height: 10dvh;
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
  margin-bottom: 5rem;

  .my-name {
    font-size: 3rem;
    letter-spacing: 2px;
    position: relative;
    padding-top: 2rem;
    right: 2.5rem;

    @include tablet-breakpoint {
      font-size: 5rem;
      letter-spacing: 5px;
      padding-top: 4rem;
      right: 10rem;
    }
  }

  .img-container {
    display: flex;
    padding-left: $shift-content-left;
    margin-top: 2.5rem;

    @include tablet-breakpoint {
      margin-top: 3rem;
    }

    .me-img {
      // set to actual image dimensions for optimal Lighthouse rating ;)
      width: 250px;
      height: 458px;

      @include tablet-breakpoint {
        width: 325px;
        height: 596px;
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
    font-size: 1.5rem;
    letter-spacing: 1px;
    line-height: 150%;
    margin-right: 5%;
    padding: 2rem 0 4rem $shift-content-left;
    max-width: 60rem;

    @media (min-width: 850px){
      position: relative;
      margin-right: 0;
      padding-left: calc($shift-content-left + 400px);
      margin-top: -2.6rem;
    }
  }
}

.home-footer {
  padding-left: $shift-left-mobile !important;

  @include tablet-breakpoint {
    padding-left: $shift-left !important;
  }
}

.recent-project-container {
  margin-bottom: $footer-push;
}
</style>
