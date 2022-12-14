<script>
export default {
  name: "MostRecentProjects",
};
</script>

<template>
  <section class="recents">
    <h2 class="recents-heading">My Most Recent Projects</h2>
    <ul class="recents-list">
      <li class="recent-item">
        <h3 class="recent-item-heading">Plant Facts Site</h3>
        <p class="recent-item-copy">
          A Frontend Mentor project, this is an eight-page fact site for all
          planets in our solar system. Built from a profossionally designed
          Figma file using Vue.js 3, Vue Router, Vite, and Sass.
        </p>
      </li>
      <li class="recent-item">
        <h3 class="recent-item-heading">Plant Facts Site</h3>
        <p class="recent-item-copy">This is a test</p>
      </li>
      <li class="recent-item">
        <h3 class="recent-item-heading">Plant Facts Site</h3>
        <p class="recent-item-copy">This is a test</p>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
.recents {
  margin-left: 5vw;

  .recents-heading {
    font-size: 1.1rem;
    letter-spacing: 0.5px;
    margin-bottom: 1rem;
  }

  .recents-list {
    list-style: none;
    padding-bottom: 4rem;

    .recent-item {
      display: grid;
      font-size: 1rem;
      grid-template-columns: 1fr 4fr;
      margin-bottom: 1rem;

      .recent-item-heading {
        color: $green-900;
        margin-right: 1rem;
        letter-spacing: 0.5px;
      }

      .recent-item-copy {
        letter-spacing: 0.5px;
        width: 75%;
      }
    }
  }
}
</style>
