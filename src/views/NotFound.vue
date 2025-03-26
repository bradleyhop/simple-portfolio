<script>
export default {
  name: "NotFound",
};
</script>

<template>
  <main class="not-found-container">
    <h1 class="four-oh-four">404</h1>
    <h2 class="pnf">Page Not Found</h2>
    <div class="link-container">
      <RouterLink to="/" class="go-home clear-link-dec">
        BACK TO HOME
      </RouterLink>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "@/assets/style/color" as *;

.not-found-container {
  background-color: $lightest-blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  min-height: 100dvh;
  text-align: center;
}

.four-oh-four {
  font-size: 10rem;
  letter-spacing: -4px;
}

.pnf {
  font-size: 2rem;
  letter-spacing: -2px;
  padding-bottom: 3.5rem;
}

.go-home {
  font-size: 2rem;
  letter-spacing: 3.5px;

  &:hover {
    border-top: 5px solid #fff;
  }
}
</style>
