<script setup>
import { Collapse } from "vue-collapsed";
import { reactive, computed } from "vue";

//load local link button components
import OutsideLinkButton from "@/components/buttons/OutsideLinkButton.vue";

// load icons
import { mdiChevronDown, mdiGithub, mdiOpenInNew } from "@mdi/js";

const props = defineProps({
  dataList: {
    type: Array,
    default: () => [],
    required: true,
  },
});

// add vue-collapsed property to prop array; no default open
const portList = computed(() => {
  return reactive(props.dataList.map((obj) => ({ ...obj, isExpanded: false })));
});

// expand new panel, closing the non-active panel
function handleAccordion(selectedIndex) {
  this.portList.forEach((_, index) => {
    this.portList[index].isExpanded =
      index === selectedIndex ? !this.portList[index].isExpanded : false;
  });
}
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
          alt="expand collapseable element"
          viewBox="0 0 24 24"
          class="svg-icon chevron"
        >
          <title>expand collapseable element</title>
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
          <picture class="project-img">
            <source
              type="image/webp"
              :srcset="`./screenshots/${project.img.webp}`"
            />
            <source
              type="image/jpg"
              :srcset="`./screenshots/${project.img.src}`"
            />
            <img
              :src="`./screenshots/${project.img.src}`"
              :alt="project.img.alt"
            />
          </picture>
          <div class="links-container">
            <h4 class="project-title">{{ project.title }}</h4>
            <div class="button-container">
              <OutsideLinkButton
                buttonTitle="Live Site"
                :outsideLink="project.link"
                :svgPath="mdiOpenInNew"
              />
              <OutsideLinkButton
                v-if="project.github"
                buttonTitle="GitHub Repo"
                :outsideLink="project.github"
                :svgPath="mdiGithub"
              />
            </div>
          </div>
        </li>
      </ul>
    </Collapse>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/style/main" as *;
@use "@/assets/style/color" as *;

.collapse {
  // npm vue-collapsed component-provided styling
  transition: height var(--vc-auto-duration) cubic-bezier(0.3, 0, 0.6, 1);
}

.collapse-container {
  padding: 1rem;
  border-bottom: 2px solid $gray-300;

  &:last-child {
    border-bottom: none;
  }
}

.topic-collapse {
  color: $not-black;
  cursor: pointer;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  min-width: 100%;
  text-align: left;

  .chevron {
    fill: $green-900;
    float: right;
  }
}

.project-img {
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  width: 8rem;
  margin-right: 1rem;
  object-fit: cover;
  align-self: center;
}

.topic-copy {
  line-height: 1.5;
  margin: 1rem 0 2rem 0;
  max-width: 80ch;
}

.topic-list {
  list-style: none;
}

.project-item {
  margin-bottom: 1rem;
  display: flex;
  border-bottom: 2px solid $lightest-blue;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
}

.project-title {
  font-size: 1.1rem;
  padding: 0.75rem 0;
}

.button-container {
  margin-bottom: 0.75rem;
  display: flex;
  flex-direction: column;

  @include tablet-breakpoint {
    flex-direction: row;
  }

  > *:first-child {
    margin-right: 1rem;
    margin-bottom: 0.5rem;

    @include tablet-breakpoint {
      margin-bottom: 0;
    }
  }
}
</style>
