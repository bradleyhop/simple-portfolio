<script>
import MenuList from "@/components/MenuList.vue";
import SiteFooter from "@/components/SiteFooter.vue";

// preload profile pic
// only prelaod webp since most modern browswers support that format

export default {
  components: {
    MenuList,
    SiteFooter,
  },

  data: () => {
    // preload profile webp pic
    const profilePic = new Image();
    profilePic.src = "./img/profilePic-350.webp";

    return {
      profilePic,
    };
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
              :srcset="profilePic.src"
              alt="image of Bradley with forest and ocean behind him"
            />
            <source
              type="image/jpg"
              srcset="@/assets/img/profilePic-350.jpg"
              alt="image of Bradley with forest and ocean behind him"
            />
            <img
              src="@/assets/img/profilePic-350.jpg"
              alt="image of Bradley with forest and ocean behind him"
              class="me-img"
              width="350"
              height="415"
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
$shift-left: 20vw;
$shift-left-mobile: 10vw;
$shift-content-left: 5vw;

.home-nav {
  display: flex;
  align-content: center;
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
    font-weight: 300;
    letter-spacing: 2.5px;
    max-width: 100%;
    position: relative;
    padding-top: 4rem;
    right: 1rem;

    @include tablet-breakpoint {
      font-size: 6rem;
      padding-top: 8rem;
      right: 11.5rem;
    }
  }

  .img-container {
    display: flex;
    padding-left: $shift-content-left;
    margin-top: 4rem;
    min-height: 20rem;
    width: auto;

    @include tablet-breakpoint {
      margin-top: 5rem;
      min-height: 30rem;
    }

    .me-img {
      height: 20rem;
      width: auto;

      @include tablet-breakpoint {
        height: 30rem;
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
    margin-right: 2.5%;
    padding: 2rem 0 4rem $shift-content-left;
    max-width: 30rem;

    @include tablet-breakpoint {
      position: relative;
      left: 14rem;
      margin-right: 0;
      padding-top: 3rem;
    }
  }
}

.home-footer {
  padding-left: $shift-left-mobile !important; // override .device-widths

  @include tablet-breakpoint {
    padding-left: $shift-left !important; // override .device-widths
  }
}
</style>
