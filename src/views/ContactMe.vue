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

  data: () => {
    const defaultForm = Object.freeze({
      email: "",
      message: "",
    });

    return {
      form: Object.assign({}, defaultForm),
      textBodyDefault: "message",
      defaultForm, // form object
    };
  },

  methods: {
    submit() {
      // we're using Netlify to handle form submission; here's their article on doing so with Vue:
      // https://www.netlify.com/blog/2018/09/07/how-to-integrate-netlify-forms-in-a-vue-app/
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": "contact-me",
          ...this.form,
        }),
      })
      // TODO: replace these dummy vue-data messages with a div?
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          } else {
            this.textSnackbar = "Form submitted! Thank you!! ";
          }
        })
        .catch((error) => {
          this.textSnackbar = "Error! Form not submitted: ";
          this.textSnackbar += error;
        });
    },
  },
};
</script>

<template>
  <PageHeader pageTitle="Contact" />

  <main class="device-widths">
    <form
      class="contact-form"
      name="contact-me"
      method="post"
      accept-charset="UTF-8"
    >
      <label class="contact-label" for="email">Your Email</label>
      <input
        class="textbox"
        id="email"
        type="email"
        name="fromEmail"
        required
      />
      <label class="contact-label message-label" for="message">Message</label>
      <textarea class="textbox" rows="6" id="message" name="message" required />
      <input type="submit" class="submit-form-input" value="Send Message" />
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

.submit-form-input {
  background-color: $lightest-blue;
  border: none;
  border-radius: 5px;
  color: $not-black;
  cursor: pointer;
  font-family: "Raleway", sans-serif;
  letter-spacing: 0.5px;
  margin-top: 1.5rem;
  padding: 1rem;
  max-width: 10rem;
}
</style>
