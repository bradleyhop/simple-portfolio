<script>
import SiteFooter from "@/components/SiteFooter.vue";
import { RouterView } from "vue-router";

export default {
  components: {
    RouterView,
    SiteFooter,
  },
};
</script>

<template>
  <RouterView />

  <SiteFooter />
</template>

<style lang="scss"></style>
