<script>
import { RouterLink } from "vue-router";

// custom Vue components
import MenuList from "@/components/MenuList.vue";
import PortCard from "@/components/PortCard.vue";

// arrays holding project info
import fCC from "@/assets/data/fcc-data.js";
import extra from "@/assets/data/extra-data.js";

// load only the icons we need!
import { mdiFire } from "@mdi/js";
import { mdiOpenInNew } from "@mdi/js";

export default {
  name: "SitePortfolio",

  components: {
    RouterLink,
    MenuList,
    PortCard,
  },

  data() {
    return {
      freecodecampData: fCC, // freecodecamp data
      extraData: extra, // extracurricular data
      // mdi icons
      mdiFire,
      mdiOpenInNew,
    };
  },
};
</script>

<template>
  <header class="port-header">
    <nav class="port-nav device-widths">
      <div class="port-nav-container">
        <RouterLink to="/" class="home-link clear-link-dec" title="to home">
          Bradley Smith
        </RouterLink>
        <MenuList class="port-nav-list" />
      </div>
      <div class="title-container">
        <h1 class="port-title">Portfolio</h1>
      </div>
    </nav>
  </header>

  <main>
    <div class="portcard-container device-widths">
      <h2 class="featured-text">featured</h2>

      <section class="portcard-container">
        <!-- chloropleth map  -->
        <PortCard
          :cardTitle="freecodecampData[0].projects[2].title"
          :liveLink="freecodecampData[0].projects[2].link"
          :gitLink="freecodecampData[0].projects[2].github"
          :imgSrc="`./screenshots/${freecodecampData[0].projects[2].img.src}`"
          :imgAlt="freecodecampData[0].projects[2].img.alt"
        />
        <!-- AIC Color Match -->
        <PortCard
          :cardTitle="extraData[0].projects[0].title"
          :liveLink="extraData[0].projects[0].link"
          :gitLink="extraData[0].projects[0].github"
          :imgSrc="`./screenshots/${extraData[0].projects[0].img.src}`"
          :imgAlt="extraData[0].projects[0].img.alt"
        />

        <!-- Pomodoro Timer -->
        <PortCard
          :cardTitle="freecodecampData[1].projects[1].title"
          :liveLink="freecodecampData[1].projects[1].link"
          :gitLink="freecodecampData[1].projects[1].github"
          :imgSrc="`./screenshots/${freecodecampData[1].projects[1].img.src}`"
          :imgAlt="freecodecampData[1].projects[1].img.alt"
        />
      </section>
    </div>
  </main>
</template>

<style lang="scss">
$border-line: 3px solid #fff;

.port-header {
  min-height: 35vh;
  background: $lightest-blue;

  .port-nav {
    .port-nav-container {
      display: flex;
      align-items: center;
      flex-direction: row;
      min-height: 15vh;
      justify-content: space-between;

      .home-link {
        font-size: 1.5rem;
        border: 3px solid rgba(0, 0, 0, 0);

        &:hover {
          border-top: $border-line;
        }
      }

      .port-nav-list {
        // override component styling
        & > li {
          &:hover {
            border-top: $border-line;
          }
        }
      }
    }
  }

  .title-container {
    display: flex;
    min-height: 10rem;

    .port-title {
      align-self: flex-end;
      font-size: 2.5rem;
      font-weight: lighter;
      margin-bottom: 1rem;
    }
  }
}

.featured-text {
  font-size: 1.5rem;
  font-weight: lighter;
  writing-mode: vertical-lr;
  text-align: center;
  transform: rotate(-180deg);
}

.portcard-container {
  display: flex;
  justify-content: space-evenly;

}
</style>
