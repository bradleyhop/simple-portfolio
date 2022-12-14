<script>
// project custom Vue components
import PageHeader from "@/components/PageHeader.vue";
import PortCard from "@/components/PortCard.vue";
import PortfolioCollapse from "@/components/PortfolioCollapse.vue";
import SiteFooter from "@/components/SiteFooter.vue";

// arrays holding project info
import fCC from "@/assets/data/fcc-data.js";
import extra from "@/assets/data/extra-data.js";

// load only the icons we need!
import { mdiFire, mdiOpenInNew } from "@mdi/js";

export default {
  name: "SitePortfolio",

  components: {
    PageHeader,
    PortCard,
    PortfolioCollapse,
    SiteFooter,
  },

  data() {
    return {
      freecodecampData: fCC, // freecodecamp data
      extraData: extra, // extracurricular data
      // mdi icons
      mdiFire,
      mdiOpenInNew,
      featuredProjects: [
        {
          // GitHub User Search app object
          title: "GitHub User Search App",
          link: "https://bradleyhop.github.io/frontend-mentor-github-user-search-app/",
          github:
            "https://github.com/bradleyhop/frontend-mentor-github-user-search-app",
          img: {
            src: "ghApp.png",
            alt: "screenshot of GitHub user search app",
          },
          desc: "A Frontend Mentor project, this app pulls GitHub user profile information and dispays it based on a professional-designed Figma file. Built using Vue.js 3, Vite, GitHub Ocktokit API, and Sass. Light or Dark theme displays based on user preferance on load; can be manually changed. ",
        },
        fCC[0].projects[2], // heat map
        extra[0].projects[0], // color match
        fCC[1].projects[0], // pomo timer
      ],
    };
  },
};
</script>

<template>
  <PageHeader pageTitle="Portfolio" />

  <main>
    <div class="portcard-container device-widths">
      <h2 class="featured-text">featured</h2>

      <section class="portcard-section">
        <div v-for="project in featuredProjects" :key="project.title">
          <PortCard
            :imgSrc="`./screenshots/${project.img.src}`"
            :imgAlt="project.img.alt"
            :cardTitle="project.title"
            :cardDesc="project.desc"
            :liveLink="project.link"
            :gitLink="project.github"
          />
        </div>
      </section>
    </div>

    <div class="portfolio-container device-widths">
      <section class="complete-portfolio">
        <article class="frontend-mentor">
          <h3 class="port-heading fm-heading-container">
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
          <h3 class="port-heading fcc-heading">
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

        <article class="extras-section">
          <h3 class="port-heading extras-heading">Extraciricular</h3>
          <p class="heading-copy">
            In addition to freeCodeCamp, I use other resources to increase my
            knowledge and practice my skills. Here are various algorithm
            exercises, classes, and projects not part of the freeCodeCamp
            curriculum.
          </p>
          <div class="port-collapse-container">
            <PortfolioCollapse :dataList="extraData" />
          </div>
        </article>
      </section>
      <!-- .complete-portfolio -->
    </div>
  </main>

  <SiteFooter class="device-widths" />
</template>

<style lang="scss">
$nav-border-line: 3px solid #fff;

.border-b-section {
  border-bottom: 1px solid #e0e0e0e0;
  padding-bottom: 1rem;
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
}

.featured-text {
  color: $gray-600;
  font-size: 1.5rem;
  font-weight: normal;
  letter-spacing: -1px;
  margin-bottom: 1rem;
  text-align: center;

  @include tablet-breakpoint {
    transform: rotate(-180deg);
    writing-mode: vertical-lr;
  }
}

.portcard-container {
  @extend .border-b-section;
  display: flex;
  flex-direction: column;

  @include tablet-breakpoint {
    flex-direction: row;
  }

  .portcard-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
}

.port-heading {
  font-weight: lighter;
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  margin: 1rem 0;
}

.frontend-mentor {
  @extend .border-b-section;

  .fm-heading-container {
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
      color: $figma-purple;
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

    &:hover {
      transform: scale(1.02);
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

  &:hover {
    transform: scale(1.02);
  }
}

.heading-copy {
  margin-bottom: 1rem;
}

.fcc-section {
  @extend .border-b-section;

  .fcc-heading {
    color: $fcc-green;
    display: flex;

    a {
      color: $fcc-green;
      display: flex;
      align-items: center;
    }
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
  align-items: center;
  display: flex;
  letter-spacing: 0.4px;
  margin: 1rem 0;
}

.cert-title {
  color: $fcc-green;
  font-size: 0.9rem;
  font-weight: normal;
  letter-spacing: 0.5px;
  margin-bottom: 0.25rem;
}

.port-collapse-container {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.extras-section {
  @extend .border-b-section;
}
</style>
