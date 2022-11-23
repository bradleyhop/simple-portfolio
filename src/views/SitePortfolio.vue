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
              &rpar; freeCodeCamp
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
          <div class="list-container">
            <h4 class="list-heading">Certificates Earned</h4>
            <ul class="fcc-list">
              <li>
                <h5>Data Visualization with D3.js</h5>
                <p class="list-para">
                  This courses teaches data visualization utilizing the D3.js
                  library to draw various presentations of data while working
                  with JSON and APIs to fetch the data. I completed the projects
                  using the Vue CLI to develop and build the projects in Vue.js.
                  I took heavy inspiration from Material Design to guide my
                  design choices.
                </p>
              </li>
              <li>
                <h5>Front End Libraries</h5>
                <p>
                  The third certification of the freeCodeCamp curriculum. This
                  section teaches the use of various libraries for html, css,
                  and javascript. On each project, there is a green hamburger
                  icon in the top left corner that opens the testing suite for
                  that particular project. The user stories are listed therein
                  (be sure that the correct project is selected in the drop-down
                  menu).
                </p>
              </li>
              <li>
                <h5>Javascript Algorithms and Data Structures</h5>
                <p>
                  The second certification of the freeCodeCamp curriculum. This
                  sections teaches javascript syntax and data structures. I have
                  solved all of the three levels of algorithm challenges. This
                  section deals with solely with learning basic programming
                  skills through javascript.
                </p>
              </li>
              <li>
                <h5>Responsive Wed Design</h5>
                <p>
                  The first certification of the freeCodeCamp curriculum. This
                  section teaches html and css to complete five projects each
                  with their own use story requirements. On each project, there
                  is a green hamburger icon in the top left corner that opens
                  the testing suite for that particular project. The user
                  stories are listed therein (be sure that the correct project
                  is selected in the drop-down menu)
                </p>
              </li>
            </ul>
          </div>
        </article>
      </section>
      <!-- .complete-portfolio -->
    </div>
  </main>
</template>

<style lang="scss">
$nav-border-line: 3px solid #fff;
$fcc-green: #00641f;

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

      .fm-text {
        font-size: 1.5rem;
        color: rgb(62, 84, 163);
        font-weight: lighter;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .figma-link {
      color: #a259ff;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.port-link-copy {
  display: flex;

  &:hover {
    text-decoration: underline;
  }
}

.svg-icon {
  fill: $not-black;
  height: 1.5rem;
  width: 1.5rem;
}

.fcc-port-link {
  color: $fcc-green;
  margin-bottom: 1rem;
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

.list-container {
  .list-heading {
    font-weight: nomrmal;
    text-decoration: underline;
    color: $fcc-green;
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
</style>
