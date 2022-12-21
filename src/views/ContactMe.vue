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
      errorMessage: "", // show user error after form submit, v-if
      successMessage: "",
    };
  },

  methods: {
    // encode form data into uri
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },

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
            console.log("successful submition");
            this.successMessage = "Form submitted! Thank you!! ";
          }
        })
        .catch((error) => {
          console.log(error);
          this.errorMessage = "Error! Form not submitted: ";
          this.errorMessage += error;
        });
    },
  },
};
</script>

<template>
  <PageHeader pageTitle="Contact" />

  <main class="device-widths">
    <h2 class="contact-tagline">Let's connect</h2>

    <form
      class="contact-form"
      name="contact-me"
      method="POST"
      accept-charset="UTF-8"
    >
      <label class="contact-label" for="email">Your Email</label>
      <input
        class="textbox"
        id="email"
        type="email"
        name="email"
        required
      />
      <label class="contact-label message-label" for="message">Message</label>
      <textarea class="textbox" rows="6" id="message" name="message" required />
      <!-- test when site is live! -->
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <input type="submit" class="submit-form-input" value="Send Message" />
    </form>
  </main>

  <SiteFooter class="device-widths" />
</template>

<style lang="scss">
.contact-tagline {
  font-size: 2rem;
  font-weight: lighter;
  letter-spacing: 0.3px;
  margin-bottom: 2rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.contact-label {
  font-size: 1rem;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
}

.message-label {
  margin-top: 1.25rem;
}

.textbox {
  background: $gray-200;
  border: none;
  color: $not-black;
  font-size: 1rem;
  max-width: 30rem;
  outline: none;
  padding: 0.5rem;

  &:focus {
    background-color: $gray-300;
  }
}

.submit-form-input {
  background-color: $not-black;
  border: none;
  color: #fff;
  cursor: pointer;
  font-family: "Raleway", sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  margin-top: 1.5rem;
  padding: 0.75rem;
  width: 8rem;

  &:hover {
    background-color: $lightest-blue;
    color: $not-black;
    transition: 200ms ease;
  }
}
</style>
