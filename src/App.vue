<script>
import { RouterView } from "vue-router";
import SiteFooter from "@/components/SiteFooter.vue";

export default {
  components: {
    RouterView,
    SiteFooter,
  },
};
</script>

<template>
  <RouterView />

  <SiteFooter class="device-widths" />
</template>

<style lang="scss"></style>
