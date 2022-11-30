<script>
import { Collapse } from "vue-collapsed";
import { reactive } from "vue";

export default {
  name: "PortfolioCollapse",

  components: {
    Collapse,
  },

  props: {
    dataList: {
      type: Array,
      default: () => [],
      required: true,
    },
  },

  methods: {
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
  <div v-for="(topic, index) in portList" :key="topic.title">
    <h4 @click="() => handleAccordion(index)" class="topic-collapse">
      {{ topic.title }}
    </h4>
    <Collapse :when="portList[index].isExpanded" class="collapse">
      <p class="topic-copy">
        {{ topic.copy }}
      </p>
      <ul v-for="project in portList[index].projects" :key="project.title">
        <li class="project-item">
          {{ project.title }}
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
// component styling
.topic-collapse {
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}
</style>
