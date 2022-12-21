<script>
// load buttons
import LiveLinkButton from "@/components/buttons/LiveSite.vue";
import GithubLinkButton from "@/components/buttons/GitHubRepo.vue";

export default {
  name: "PortCard",

  components: {
    LiveLinkButton,
    GithubLinkButton,
  },

  props: {
    imgSrc: {
      type: String,
      default: "",
    },
    imgAlt: {
      type: String,
      default: "",
    },
    cardTitle: {
      type: String,
      default: "",
    },
    cardDesc: {
      type: String,
      default: "",
    },
    liveLink: {
      type: String,
      default: "",
    },
    gitLink: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <div class="port-card-container">
    <img class="card-img" :src="imgSrc" :alt="imgAlt" />
    <div class="bottom-card-container">
      <h2 class="card-title">{{ cardTitle }}</h2>
      <p class="card-desc">{{ cardDesc }}</p>
      <div class="link-container">
        <LiveLinkButton :externalLink="liveLink" />
        <GithubLinkButton :gitLink="gitLink" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.port-card-container {
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 90%;
  margin: auto;

  @include tablet-breakpoint {
    width: 30rem;
  }

  .card-img {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    object-fit: fit;
    width: auto;

    @include tablet-breakpoint {
      height: 16rem;
      width: inherit;
    }
  }

  .bottom-card-container {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;

    .card-title {
      color: $not-black;
      font-size: 1.1rem;
      letter-spacing: -1px;
      margin: 1rem;
    }

    .card-desc {
      font-size: 0.9rem;
      line-height: 1.5rem;
      padding: 0 1rem;
      margin-bottom: 1rem;

      @include tablet-breakpoint {
        min-height: 9rem;
      }
    }

    .link-container {
      display: flex;
      justify-content: space-evenly;
      min-height: 3rem;
      padding-bottom: 0.5rem;
      margin-bottom: 1rem;
    }
  }
}
</style>
