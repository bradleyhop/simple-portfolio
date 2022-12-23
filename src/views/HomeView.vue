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
              srcset="@/assets/img/meLongSmaller.webp"
            />
            <source type="image/jpg" srcset="@/assets/img/meLongSmaller.jpg" />
            <img
              src="@/assets/img/meLongSmaller.jpg"
              alt="image of Bradley with forest and ocean behind him"
              class="me-img"
            />
          </picture>
          <figcaption class="caption-me">Web Development</figcaption>
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
$shift-left-mobile: 10vw;

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
    letter-spacing: 2px;
    margin-left: -1.75rem;
    padding-top: 4rem;

    @include tablet-breakpoint {
      font-size: 6rem;
      margin-left: -8rem;
      padding-top: 8rem;
    }
  }

  .img-container {
    display: flex;
    margin-left: 5vw;
    margin-top: 4rem;
    min-height: 20rem;
    width: auto;

    @include tablet-breakpoint {
      margin-top: 5rem;
      min-height: 30rem;
    }

    .me-img {
      height: 20rem;

      @include tablet-breakpoint {
        height: 30rem;
      }
    }

    .caption-me {
      color: $green-900;
      font-size: 1rem;
      letter-spacing: -0.5px;
      padding-left: 0.25rem;
      padding-top: 0.5rem;
      transform-origin: top right;
      writing-mode: vertical-rl;
    }
  }

  .tagline {
    color: $not-black;
    font-size: 1.1rem;
    letter-spacing: 1px;
    margin-right: 2.5%;
    padding: 1rem 0 4rem 5vw;

    @include tablet-breakpoint {
      margin-right: 0;
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
