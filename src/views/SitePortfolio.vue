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
          desc: "This Frontend Mentor project retrieves and displays GitHub user profile information. The design is based on a professionally design via a Figma file. Vue.js 3, Vite, GitHub Ocktokit API, and Sass were used to create this page. On load, the light or dark theme is displayed dependent on the user's preference; this can be modified manually.",
        },
        {
          title: "Planet Facts Site",
          link: "https://bradleyhop.github.io/frontend-mentor-planet-facts-site/",
          github:
            "https://github.com/bradleyhop/frontend-mentor-planet-facts-site",
          img: {
            src: "desktopPlanet.png",
            alt: "screenshot of planet facts website",
          },
          desc: "This Frontend Mentor project is an eight page planet fact site built using Vue.js, Vue Router, Vite, ans Sass. Desktop, mobile, and tablet responsive design from provided Figma design file.",
        },
        fCC[0].projects[2], // heat map
        extra[0].projects[0], // color match
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
            This community-based learning platform assists developers in
            improving their knowledge and skills through the use of real-world
            frontend projects. I select and build projects using a professional
            design file &mdash; in my case,&nbsp;
            <a
              href="https://figma.com"
              target="_blank"
              rel="noreferrer noopener"
              class="figma-link"
              >Figma</a
            >
            . I can then solicit feedback and evaluate my peers' work.
          </p>
          <p class="port-link-copy">
            <a
              href="https://frontendmentor.io/profile/bradleyhop"
              target="_blank"
              rel="noreferrer noopener"
              class="fm-profile-link"
            >
              Find my Frontend Mentor portfolio here
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
            FreeCodeCamp provides instruction and projects for students to learn
            front and back end web development. The projects I've built for the
            certificates I've earned are all my own design and implementation.
            There is a testing app that freeCodeCamp provides, but some projects
            may not pass due to a lack of Vue.js support.
          </p>
          <p class="port-link-copy">
            <a
              href="https://frontendmentor.io/profile/bradleyhop"
              target="_blank"
              rel="noreferrer noopener"
              class="fcc-port-link"
            >
              Find my freeCodeCamp portfolio here
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
          <h3 class="port-heading extras-heading">Extracurricular</h3>
          <p class="heading-copy">
            These are projects that were a collaboration, or just something fun
            to test and expand my skills.
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
  line-height: 1.5rem;
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
  width: 75%;
  margin: 1.5rem auto 0.5rem auto;
}

.port-collapse-container {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  @include tablet-breakpoint {
    width: 75%;
    margin: auto;
  }
}

.extras-section {
  @extend .border-b-section;
}
</style>
