<script>
import { Collapse } from "vue-collapsed";
import { reactive } from "vue";

//load local link button components
import LiveLinkButton from "@/components/buttons/LiveSite.vue";
import GithubLinkButton from "@/components/buttons/GitHubRepo.vue";
// load icons
import { mdiChevronDown } from "@mdi/js";

export default {
  name: "PortfolioCollapse",

  components: {
    Collapse,
    LiveLinkButton,
    GithubLinkButton,
  },

  data: () => ({
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
    // add vue-collapsed property to prop array; no default open
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
              <LiveLinkButton :externalLink="project.link" />
              <GithubLinkButton v-if="project.github" :gitLink="project.github" />
            </div>
          </div>
        </li>
      </ul>
    </Collapse>
  </div>
</template>

<style lang="scss" scoped>
.collapse {
  // npm vue-collapsed component-provided styling
  transition: height var(--vc-auto-duration) cubic-bezier(0.3, 0, 0.6, 1);
}

.collapse-container {
  padding: 0.5rem;
  border-bottom: 1px solid $gray-300;
}

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
  }
}

.project-img {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  width: 8rem;
  margin-right: 1rem;
  object-fit: cover;
}

.topic-copy {
  line-height: 1.5rem;
  margin: 1rem 0 2rem 0;
}

.topic-list {
  list-style: none;
}

.project-item {
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
}

.button-container {
  padding: 0.4rem 0;

  > *:first-child {
    margin-bottom: 0.5rem;
  }
}

.link-button {
  border: none;
  background-color: $lightest-blue;
  border-radius: 100px;
  cursor: pointer;
  font-size: 0.7rem;
  margin-right: 1rem;

  &:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition-duration: 200ms;
  }

  .project-link {
    display: flex;
    padding: 0.5rem 0.5rem;
  }

  .button-text {
    align-self: center;
    color: $not-black;
  }

  .svg-icon {
    fill: $not-black;
    height: 1.5em;
    width: 1.5em;
  }
}
</style>
