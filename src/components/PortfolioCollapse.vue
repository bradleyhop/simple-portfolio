<script>
import { Collapse } from "vue-collapsed";
import { reactive } from "vue";
// load icons
import { mdiOpenInNew, mdiGithub, mdiChevronDown } from "@mdi/js";

export default {
  name: "PortfolioCollapse",

  components: {
    Collapse,
  },

  data: () => ({
    // mdi icons
    mdiOpenInNew,
    mdiGithub,
    mdiChevronDown,
  }),

  props: {
    dataList: {
      type: Array,
      default: () => [],
      required: true,
    },
  },

  methods: {
    // expand new panel, closing the non-active panel
    handleAccordion: function (selectedIndex) {
      this.portList.forEach((_, index) => {
        this.portList[index].isExpanded =
          index === selectedIndex ? !this.portList[index].isExpanded : false;
      });
    },
  },

  computed: {
    // add vue-collapsed property to prop array
    portList() {
      return reactive(
        this.dataList.map((obj) => ({ ...obj, isExpanded: false }))
      );
    },
  },
};
</script>

<template>
  <div
    v-for="(topic, index) in portList"
    :key="topic.title"
    class="collapse-container"
  >
    <button @click="() => handleAccordion(index)" class="topic-collapse">
      {{ topic.title }}
      <span class="chevron-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          alt="image indicating an outside link"
          viewBox="0 0 24 24"
          class="svg-icon chevron"
        >
          <path :d="mdiChevronDown"></path>
        </svg>
      </span>
    </button>
    <Collapse :when="portList[index].isExpanded" class="collapse">
      <p class="topic-copy">
        {{ topic.copy }}
      </p>
      <ul class="topic-list">
        <li
          v-for="project in portList[index].projects"
          :key="project.title"
          class="project-item"
        >
          <img
            :src="`./screenshots/${project.img.src}`"
            :alt="project.img.alt"
            class="project-img"
          />
          <div class="links-container">
            <p>{{ project.title }}</p>
            <div class="button-container">
              <a
                :href="project.link"
                class="project-link"
                target="_blank"
                rel="noopener noreferrer"
                title="live demo"
              >
                <button class="link-button">
                  <span class="button-text">Live Site</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    alt="image indicating an outside link"
                    viewBox="0 0 24 24"
                    class="svg-icon"
                  >
                    <path :d="mdiOpenInNew"></path>
                  </svg>
                </button>
              </a>
              <a
                :href="project.github"
                class="project-link"
                target="_blank"
                rel="noopener noreferrer"
                title="source code"
              >
                <button class="link-button">
                  <span class="button-text">GitHub Repo</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    class="svg-icon"
                  >
                    <path :d="mdiGithub"></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </Collapse>
  </div>
</template>

<style lang="scss" scoped>
// vue-collapsed component provided styling
.collapse {
  transition: height var(--vc-auto-duration) cubic-bezier(0.3, 0, 0.6, 1);
}

.collapse-container {
  padding: 0.5rem;
  border-bottom: 1px solid lightgray;
}
// component styling
.topic-collapse {
  color: $not-black;
  cursor: pointer;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  min-width: 100%;
  text-align: left;

  .chevron {
    fill: $not-black;
    float: right;

    // placeholder
    &:hover {
      transform: rotate(180deg);
      transition: 200ms ease-in;
    }
  }
}

.project-img {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  height: 3.5rem;
  margin-right: 1rem;
  object-fit: cover;
}

.topic-container {
  margin: 0.75rem 0;
}

.topic-copy {
  margin: 1rem 0;
}

.topic-list {
  list-style: none;
}

.project-item {
  padding-bottom: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.button-container {
  display: flex;
  align-items: center;
}

.project-link {
  padding: 0.5rem 1rem 0.5rem 0;

  .links-container {
    display: block;
  }

  .link-button {
    display: inline-flex;
    border: none;
    background-color: $lightest-blue;
    border-radius: 100px;
    cursor: pointer;
    font-size: 0.7rem;
    padding: 0.4rem 0.75rem;

    &:hover {
      transform: scale(1.1);
      transition-duration: 200ms;
    }

    .button-text {
      align-self: center;
      color: $not-black;
      padding-right: 4px;
    }

    .svg-icon {
      fill: $not-black;
      height: 1.5em;
      width: 1.5em;
    }
  }
}
</style>
