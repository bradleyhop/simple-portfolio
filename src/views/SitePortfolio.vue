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

      <section class="portcard-section">
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
      <!-- .device-widths -->
    </div>

    <div class="portfolio-container device-widths">
      <section class="complete-portfolio">
        <article class="frontend-mentor">
          <h3 class="fm-heading-container">
            <a
              href="https://frontendmentor.io"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src="/img/frontend-mentor-seeklogocom.svg"
                alt="frontend mentor icon"
                class="fmIcon"
              />
              <span class="fmText">Frontend Mentor</span>
            </a>
          </h3>
          <p class="heading-copy">
            This community-based learning platform helps developers enhance and
            their knowledge and skills with real-world frontend projects. I
            choose and build projects using a professional design file &mdash;I
            utilize
            <a
              href="https://figma.com"
              target="_blank"
              rel="noreferrer noopener"
              class="figma-link"
              >Figma</a
            >
            in my case &mdash; to create the website. I may then request
            feedback and evaluate the work of my peers.
          </p>
          <p class="fm-link-copy">
            <a
              href="https://frontendmentor.io/profile/bradleyhop"
              target="_blank"
              rel="noreferrer noopener"
              >Find my Frontend Mentor portofolio here
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              alt="image indicating an outside link"
              viewBox="0 0 24 24"
              class="svg-icon"
            >
              <path :d="mdiOpenInNew"></path>
            </svg>
          </p>
        </article>

        <article>
          <a
            href="https://freecodecamp.org"
            target="_blank"
            rel="noreferrer noopener"
            >
            <h3 class="fcc-color">
              freeCodeCamp
              <!-- home-made freeCodeCamp icon using material icon fire and some css trickery -->
              &lpar;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-hidden="true"
                viewBox="0 0 24 24"
                class="svg-icon-fire"
                >
                <path :d="mdiFire"></path>
              </svg>
              &rpar;
            </h3>
          </a>
          <p class="heading-copy">
            I use freeCodeCamp as my primary source of learning and project
            building. Courses are designed to be taken in order starting with
            basic HTML and CSS, to learning frontend and backend frameworks with
            javascript.
          </p>
          <p class="heading-copy">
            Each project has a series of user stories checked by a unit testing
            tool provided by freeCodeCamp. The green hamburger-icon in the top
            left drops down to show a list of projects. Be sure to select the
            correct project from the drop-down menu, select "Run Tests", and then
            click the button below to show the results. Note: Vue is not
            officially supported by these unit tests, but I was able to get nearly
            all projects to pass.
          </p>
        </article>
      </section>
      <!-- .complete-portfolio -->
    </div>
  </main>
</template>

<style lang="scss">
$nav-border-line: 3px solid #fff;

@mixin border-b-section {
  border-bottom: 1px solid #e0e0e0e0;
}

.port-header {
  min-height: 35vh;
  background: $lightest-blue;
  margin-bottom: 2rem;

  .port-nav {
    .port-nav-container {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      min-height: 15vh;

      .home-link {
        font-size: 1.5rem;
        border: 3px solid rgba(0, 0, 0, 0);
        letter-spacing: 1px;

        &:hover {
          border-top: $nav-border-line;
        }
      }

      .port-nav-list {
        // override component styling
        & > li {
          &:hover {
            border-top: $nav-border-line;
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
      letter-spacing: -1px;
    }
  }
}

.featured-text {
  color: #bdbdbd;
  font-size: 1.5rem;
  font-weight: normal;
  letter-spacing: -1px;
  text-align: center;
  transform: rotate(-180deg);
  writing-mode: vertical-lr;
}

.portcard-container {
  @include border-b-section;
  display: flex;
  padding-bottom: 2rem;

  .portcard-section {
    display: flex;
    justify-content: space-evenly;
  }
}

.complete-portfolio {
  .frontend-mentor {
    @include border-b-section;
    padding: 2rem 0;

    .fm-heading-container {
      margin-bottom: 1rem;

      .fmIcon {
        height: 1.5rem;
        margin-right: 0.5rem;
        width: 1.5rem;
      }

      .fmText {
        font-size: 1.5rem;
        color: rgb(62, 84, 163);
        font-weight: lighter;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .svg-icon {
      fill: $not-black;
      height: 1.5rem;
      width: 1.5rem;
    }

    .fm-link-copy {
      display: flex;

      .figma-link {
        color: #a259ff;

        &:hover {
          text-decoration: underline;
        }
      }

      & > * {
        color: rgb(62, 84, 163);

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}

.svg-icon-fire {
  fill: $not-black;
  height: 1.5rem;
  width: 1.5rem;
}
</style>
