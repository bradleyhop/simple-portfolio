<script>
// load buttons
import OutsideLinkButton from "@/components/buttons/OutsideLinkButton.vue";

// load icons
import { mdiGithub, mdiOpenInNew } from "@mdi/js";

export default {
  name: "PortCard",

  data: () => ({
    // mdi icon paths
    mdiGithub,
    mdiOpenInNew,
  }),

  components: {
    OutsideLinkButton,
  },

  props: {
    imgSrc: {
      type: String,
      default: "",
      required: true,
    },
    imgWebp: {
      type: String,
      default: "",
      required: true,
    },
    imgAlt: {
      type: String,
      default: "",
      required: true,
    },
    cardTitle: {
      type: String,
      default: "",
      required: true,
    },
    cardDesc: {
      type: String,
      default: "",
      required: true,
    },
    liveLink: {
      type: String,
      default: "",
      required: true,
    },
    gitLink: {
      type: String,
      default: "",
      required: true,
    },
  },
};
</script>

<template>
  <div class="port-card-container">
    <div class="img-container">
      <picture class="card-img">
        <a
          :href="liveLink"
          target="_blank"
          rel="noopener noreferrer"
          title="live site"
        >
          <source type="image/webp" :srcset="imgWebp" />
          <source type="image/jpg" :srcset="imgSrc" />
          <img :src="imgSrc" :alt="imgAlt" />
        </a>
      </picture>
    </div>
    <section class="bottom-card-container">
      <h2 class="card-title">{{ cardTitle }}</h2>
      <article class="card-copy">
        <p class="card-desc">{{ cardDesc }}</p>
        <div class="link-container">
          <OutsideLinkButton
            buttonTitle="Live Site"
            :outsideLink="liveLink"
            :svgPath="mdiOpenInNew"
          />
          <OutsideLinkButton
            buttonTitle="GitHub Repo"
            :outsideLink="gitLink"
            :svgPath="mdiGithub"
          />
        </div>
      </article>
    </section>
  </div>
</template>

<style lang="scss" scoped>
$card-border-radius: 5px;

.port-card-container {
  border-radius: $card-border-radius;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin: auto;
  margin-bottom: 1rem;
  width: 90%;

  @include tablet-breakpoint {
    display: flex;
    margin: 1rem 0.5rem;
    width: initial;
  }

  .img-container {
    border-top-left-radius: $card-border-radius;
    border-top-right-radius: $card-border-radius;

    @include tablet-breakpoint {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 12rem;
    }

    .card-img {
      object-fit: contain;
      border-top-left-radius: $card-border-radius;
      border-top-right-radius: $card-border-radius;
      object-fit: cover;

      @include tablet-breakpoint {
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        border-top-left-radius: initial;
        border-top-right-radius: initial;
        height: auto;
        margin: 0.5rem;
        width: 12rem;

        &:hover {
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
            0 3px 6px rgba(0, 0, 0, 0.23);
          transition: ease-in;
          transition-duration: 100ms;
        }
      }
    }
  }

  .bottom-card-container {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;

    .card-title {
      font-size: 1.2rem;
      letter-spacing: -0.5px;
      margin: 1rem;
    }

    .card-desc {
      font-size: 1rem;
      line-height: 1.5rem;
      padding: 0 1rem;
      margin-bottom: 1rem;
    }

    .card-copy {
      max-width: 80ch;
    }

    .link-container {
      display: flex;
      justify-content: space-evenly;
      min-height: 3rem;
      padding-bottom: 1rem;

      @include tablet-breakpoint {
        justify-content: initial;

        & > * {
          padding: 0 1rem 0.5rem 1rem;
        }
      }
    }
  }
}
</style>
