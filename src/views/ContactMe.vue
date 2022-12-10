<script>
// project custom Vue components
import PageHeader from "@/components/PageHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";

export default {
  name: "ContactMe",

  components: {
    PageHeader,
    SiteFooter,
  },

  props: {
    pageTitle: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <PageHeader pageTitle="Contact" />

  <main class="device-widths">
    <form class="contact-form" name="contact-me" method="post" accept-charset="UTF-8">
      <label class="contact-label" for="from-email">Your Email</label>
      <input class="textbox" id="from-email" type="email" name="fromEmail" />
      <label class="contact-label message-label" for="message">Message</label>
      <textarea class="textbox" rows="6" id="message" name="message" />
    </form>
  </main>

  <SiteFooter class="device-widths" />
</template>

<style lang="scss">
.contact-form {
  display: flex;
  flex-direction: column;
}

.contact-label {
  font-size: 1.25rem;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
}

.message-label {
  margin-top: 1.25rem;
}

.textbox {
  background: #fff;
  color: $not-black;
  font-size: 1.25rem;
  max-width: 40%;
  padding: 0.5rem;
}
</style>
