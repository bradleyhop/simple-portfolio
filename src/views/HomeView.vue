<script>
import MenuList from "@/components/menu/MenuList.vue";
// RouterLink is already imported from MenuList
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
  <header>
    <nav class="device-widths home-nav">
      <!-- no mobile menu on homepage -->
      <MenuList />
    </nav>
  </header>

  <main>
    <div class="main-container">
      <article class="main-info-container">
        <h1 class="my-name">Bradley Smith</h1>
        <div class="content-main-container">
          <figure class="img-container">
            <picture>
              <!--
                - Lighthouse wants a higher res picture for Best Practices
                -  Cellphones have a high pixel density, hence double desktop
                -  width
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
          </figure>

          <div class="tagline">
            <h2 class="heading-tagline">I am a front-end web developer.</h2>

            <p class="about-me-copy">
              Leveraging Vue.js and Sass, I seamlessly blend functionality with
              aesthetic appeal, ensuring every aspect of the site adheres
              meticulously to design layouts. My keen eye for detail guarantees
              a responsive implementation, maintaining fidelity to the original
              vision while optimizing for both desktop and mobile platforms.
              With a knack for adaptability, I am proficient in integrating
              various libraries to meet project demands, guaranteeing versatile
              and robust web applications tailored to each client's unique
              needs.
            </p>

            <RouterLink to="/portfolio" title="See samples of my work">
              <button class="port-button-link">View My Portfolio</button>
            </RouterLink>
          </div>
        </div>
      </article>
    </div>

    <div class="main-container project-container">
      <div class="recent-project-container">
        <MostRecentProjects />
      </div>
    </div>
  </main>

  <SiteFooter class="home-footer" />
</template>

<style lang="scss">
@use "@/assets/style/main" as *;
@use "@/assets/style/color" as *;

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

  .content-main-container {
    display: grid;

    @include desktop-breakpoint {
      grid-template-columns: 1fr 2fr;
      align-items: center;
      padding-bottom: 5rem;
    }
  }
}

.main-info-container {
  margin-bottom: 5rem;
  display: grid;
  grid-template-columns: 1fr, 2fr;
  align-items: center;

  @include desktop-breakpoint {
    grid-template-columns: 1fr;
  }
}

.my-name {
  color: $green-900;
  font-size: 3rem;
  letter-spacing: 2px;
  margin-bottom: 2rem;
  position: relative;
  padding-top: 2rem;
  right: 3rem;

  @include tablet-breakpoint {
    font-size: 4rem;
    letter-spacing: 4px;
    margin-bottom: 3rem;
    padding-top: 3rem;
    right: 10.5rem;
  }
}

.img-container {
  padding-left: $shift-content-left;

  .me-img {
    // set to actual image dimensions for optimal Lighthouse rating ;)
    width: 250px;
    height: 458px;

    @include large-desktop-breakpoint {
      width: 325px;
      height: 596px;
    }
  }
}

.tagline {
  line-height: 1.5;

  @include desktop-breakpoint {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    max-width: 30vw;
    min-height: 100%;
    min-width: 40rem;
    padding-left: 0;
  }

  & > h2 {
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 1.5rem 0 1.5rem $shift-content-left;
    text-align: left;

    @include desktop-breakpoint {
      font-size: 1.75rem;
      margin: 0 0 1rem 0;
      text-align: center;
    }
  }

  & > p {
    letter-spacing: 0.25px;
    margin-bottom: 1rem;
    text-align: left;
    font-size: 1.25rem;
    padding: $shift-content-left;

    @include desktop-breakpoint {
      text-align: justify;
      // not supported by all browsers
      text-justify: inter-character;
      padding: 0 2.5rem;
    }
  }
}

.port-button-link {
  background-color: $green-900;
  border-radius: 100px;
  color: $not-white;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.3rem;
  padding: 0.75rem 1.5rem;
  margin-left: $shift-content-left;
  margin-bottom: 3rem;
  transition: box-shadow 200ms ease-in;

  &:hover {
    box-shadow:
      0 3px 6px rgba(0, 0, 0, 0.16),
      0 3px 6px rgba(0, 0, 0, 0.23);
  }

  @include desktop-breakpoint {
    margin-bottom: 0;
    margin-left: 0;
  }
}

.home-footer {
  padding-left: $shift-left-mobile !important;

  @include tablet-breakpoint {
    padding-left: $shift-left !important;
  }
}

.project-container {
  background: $gray-50;
}

.recent-project-container {
  margin-bottom: $footer-push !important;
}
</style>
