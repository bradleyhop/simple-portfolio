<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import PageHeader from "@/components/persistent/PageHeader.vue";
import SiteFooter from "@/components/persistent/SiteFooter.vue";

const router = useRouter();

const props = defineProps({
  pageTitle: {
    type: String,
    default: "",
  },
});

const DEFAULT_FORM = reactive({
  email: "",
  message: "",
});

// user-input into form
const userForm = ref(Object.assign({}, DEFAULT_FORM));
// using this as a truthy value to show success message
const successMessage = ref("");

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

function handleSubmit() {
  // we're using Netlify to handle form submission; here's their article on doing so with Vue:
  // https://www.netlify.com/blog/2018/09/07/how-to-integrate-netlify-forms-in-a-vue-app/
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": "contact-me",
      ...userForm.value,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      } else {
        successMessage.value = "Form submitted. Thank you!";
      }
    })
    .catch(() => {
      // redirect to error page
      router.push("404");
    })
    .finally(() => {
      // reset form
      userForm.message.value = "";
      userForm.email.value = "";
    });
}
</script>

<template>
  <PageHeader pageTitle="Contact" />

  <main class="device-widths">
    <div v-if="!successMessage" class="form-wrapper">
      <h2 class="contact-tagline">Let's connect</h2>

      <form
        class="contact-form"
        name="contact-me"
        method="POST"
        @submit.prevent="handleSubmit"
      >
        <label class="contact-label" for="email">Email</label>
        <input
          class="contact-textbox"
          id="email"
          type="email"
          name="email"
          autocomplete="email"
          v-model="userForm.email"
          required
        />
        <label class="contact-label message-label" for="message">Message</label>
        <textarea
          class="contact-textbox"
          rows="6"
          id="message"
          name="message"
          v-model="userForm.message"
          required
        />
        <input type="submit" class="submit-form-input" value="Send Message" />
      </form>
    </div>

    <!-- show user of the status of their form submission -->
    <div class="submit-feedback-container">
      <p v-if="successMessage" class="submit-feedback success-message">
        {{ successMessage }}
      </p>
    </div>

    <!-- HoneyBook Form
    <div class="honeybook-form">
      <a
        href="https://www.honeybook.com/widget/bradleysmithtech_249771/cf_id/640776c1dce5be0c6820ca44"
        target="_blank"
        title="HoneyBook Form"
        class="link-honeybook-form"
      >
        Or Use my HoneyBook Contact Form to Start a Project Inquiry!
      </a>
    </div>
    -->
  </main>

  <SiteFooter />
</template>

<style lang="scss">
@use "@/assets/style/color" as *;

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

.contact-textbox {
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
  font-weight: bold;
  letter-spacing: 0.5px;
  margin-top: 1.5rem;
  padding: 0.75rem 0;
  width: 8rem;
  transition: 200ms ease-in;

  &:hover {
    background-color: $lightest-blue;
    color: $not-black;
  }
}

.submit-feedback-container {
  .submit-feedback {
    padding-top: 1rem;
    font-size: 2rem;
  }

  .success-message {
    color: $green-900;
  }
}
/*
 * HoneyBook Form
 *
 * .honeybook-form {
 *   margin: 2rem 0;
 *
 *   .link-honeybook-form {
 *     font-size: 1.2rem;
 *     color: $green-900;
 *     line-height: 1.5;
 *
 *     &:hover {
 *       text-decoration: underline;
 *     }
 *   }
 * }
 */
</style>
