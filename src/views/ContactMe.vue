<script>
import { RouterLink } from "vue-router";

// project custom Vue components
import MenuList from "@/components/MenuList.vue";
import SiteFooter from "@/components/SiteFooter.vue";

export default {
  name: "ContactMe",

  components: {
    RouterLink,
    MenuList,
    SiteFooter,
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
        <h1 class="port-title">Contact</h1>
      </div>
    </nav>
  </header>

  <SiteFooter class="device-width" />

</template>
