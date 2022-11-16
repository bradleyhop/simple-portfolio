<script>
// custom Vue components
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
  <PortCard
    :cardTitle="freecodecampData[0].projects[2].title"
    :liveLink="freecodecampData[0].projects[2].link"
    :gitLink="freecodecampData[0].projects[2].github"
    :imgSrc="`@/assets/screenshots/${freecodecampData[0].projects[2].img.src}`"
    :imgAlt="freecodecampData[0].projects[2].img.alt"
  />
</template>

<style></style>
