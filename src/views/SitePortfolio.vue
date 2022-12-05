<script>
import { RouterLink } from "vue-router";

// project custom Vue components
import MenuList from "@/components/MenuList.vue";
import PortCard from "@/components/PortCard.vue";
import PortfolioCollapse from "@/components/PortfolioCollapse.vue";

// arrays holding project info
import fCC from "@/assets/data/fcc-data.js";
import extra from "@/assets/data/extra-data.js";

// load only the icons we need!
import { mdiFire, mdiOpenInNew } from "@mdi/js";

export default {
  name: "SitePortfolio",

  components: {
    RouterLink,
    MenuList,
    PortCard,
    PortfolioCollapse,
  },

  data() {
    return {
      freecodecampData: fCC, // freecodecamp data
      extraData: extra, // extracurricular data
      // mdi icons
      mdiFire,
      mdiOpenInNew,
      // blarg
      featuredProjects: [
        fCC[0].projects[2], // heat map
        extra[0].projects[0], // color match
        fCC[1].projects[0], // pomo timer
      ],
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
        <div v-for="project in featuredProjects" :key="project.title">
          <PortCard
            :cardTitle="`${project.title}`"
            :liveLink="`${project.link}`"
            :gitLink="`${project.github}`"
            :imgSrc="`./screenshots/${project.img.src}`"
            :imgAlt="`${project.img.alt}`"
          />
        </div>
      </section>
    </div>

    <div class="portfolio-container device-widths">
      <section class="complete-portfolio">
        <article class="frontend-mentor">
          <h3 class="fm-heading-container">
            <a
              href="https://frontendmentor.io"
              target="_blank"
              rel="noreferrer noopener"
              class="fm-heading-link"
            >
              <img
                src="/img/frontend-mentor-seeklogocom.svg"
                alt="frontend mentor icon"
                class="fmIcon"
              />
              <span class="fm-text">Frontend Mentor</span>
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
          <p class="port-link-copy">
            <a
              href="https://frontendmentor.io/profile/bradleyhop"
              target="_blank"
              rel="noreferrer noopener"
              class="fm-profile-link"
              >Find my Frontend Mentor portofolio here
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                alt="image indicating an outside link"
                viewBox="0 0 24 24"
                class="svg-icon"
              >
                <path :d="mdiOpenInNew"></path>
              </svg>
            </a>
          </p>
        </article>

        <article class="fcc-section">
          <h3 class="fcc-heading">
            <a
              href="https://freecodecamp.org"
              target="_blank"
              rel="noreferrer noopener"
            >
              &lpar;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-hidden="true"
                viewBox="0 0 24 24"
                class="fcc-icon"
              >
                <path :d="mdiFire"></path>
              </svg>
              &rpar;&nbsp;freeCodeCamp
              <!-- home-made freeCodeCamp icon using material icon fire and some css trickery -->
            </a>
          </h3>
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
            correct project from the drop-down menu, select "Run Tests", and
            then click the button below to show the results. Note: Vue is not
            officially supported by these unit tests, but I was able to get
            nearly all projects to pass.
          </p>
          <p class="port-link-copy">
            <a
              href="https://frontendmentor.io/profile/bradleyhop"
              target="_blank"
              rel="noreferrer noopener"
              class="fcc-port-link"
              >Find my freeCodeCamp portofolio here
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                alt="image indicating an outside link"
                viewBox="0 0 24 24"
                class="svg-icon"
              >
                <path :d="mdiOpenInNew"></path>
              </svg>
            </a>
          </p>

          <h4 class="cert-title">Certificates Earned</h4>
          <div class="port-collapse-container">
            <PortfolioCollapse :dataList="freecodecampData" />
          </div>
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
        border: 3px solid transparent;
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
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
}

.complete-portfolio {
  .frontend-mentor {
    @include border-b-section;
    padding: 2rem 0 1rem 0;

    .fm-heading-container {
      margin-bottom: 1rem;

      .fm-heading-link {
        display: flex;
        align-items: center;
      }

      .fmIcon {
        height: 1.5rem;
        margin-right: 0.5rem;
        width: 1.5rem;
      }

      .fm-text {
        font-size: 1.5rem;
        color: $figma-purple;
        font-weight: lighter;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .figma-link {
      color: $figma-purple;

      &:hover {
        text-decoration: underline;
      }
    }

    .fm-profile-link {
      color: $figma-purple;
      display: flex;
      border-bottom: 1px solid rgba(0, 0, 0, 0);

      &:hover {
        transform: scale(1.02);
      }
    }
  }
}

.svg-icon {
  fill: $not-black;
  height: 1.5rem;
  width: 1.5rem;
}

.fcc-port-link {
  color: $fcc-green;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0);

  &:hover {
    transform: scale(1.02);
  }
}

.fcc-section {
  @include border-b-section;
  margin: 2rem 0;

  .fcc-heading {
    margin-bottom: 1rem;
    display: flex;

    a {
      color: $fcc-green;
      font-size: 1.5rem;
      font-weight: lighter;
      display: flex;
      align-items: center;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .heading-copy {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 2rem;
    }
  }

  .fcc-heading {
    color: $fcc-green;
  }

  .fcc-icon {
    height: 1.5rem;
    width: 1.5rem;
    fill: $fcc-green;
    transform: scaleX(-1);
    vertical-align: text-bottom;
    margin-left: -5px;
    margin-right: -6px;
  }
}

.port-link-copy {
  margin: 1rem 0;
  display: flex;
  align-items: center;
}

.list-container {
  margin: auto;
  max-width: 80%;
  padding-bottom: 1rem;

  .cert-heading {
    font-weight: normal;
    font-style: italic;
    margin-bottom: 0.3rem;
  }

  .fcc-list {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 1rem;
    }
  }
}

.cert-title {
  color: $fcc-green;
  font-size: 1.1rem;
  font-weight: normal;
  margin-bottom: 0.25rem;
}

.port-collapse-container {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
</style>
