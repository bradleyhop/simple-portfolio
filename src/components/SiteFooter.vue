<script>
export default {
  name: "SiteFooter",
};
</script>

<template>
  <footer class="device-widths">
    <nav class="footer-list-container">
      <ul class="footer-column nav-list">
        <li>
          <RouterLink to="/" class="clear-link-dec footer-router"> home </RouterLink>
        </li>
        <li>
          <RouterLink to="/portfolio" class="clear-link-dec footer-router">
            portfolio
          </RouterLink>
        </li>
        <li>contact</li>
      </ul>
      <ul class="footer-column contact-list">
        <li>
          <a
            href="https://github.com/bradleyhop"
            class="footer-link"
            rel="noopener noreferer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://github.com/bradleyhop"
            class="footer-link"
            rel="noopener noreferer"
          >
            Frontend Mentor
          </a>
        </li>
        <li>
          <a
            href="https://github.com/bradleyhop"
            class="footer-link"
            rel="noopener noreferer"
          >
            freeCodeCamp
          </a>
        </li>
        <li>
          <a
            href="https://github.com/bradleyhop"
            class="footer-link"
            rel="noopener noreferer"
          >
            Codewars
          </a>
        </li>
        <li>
          <a
            href="https://github.com/bradleyhop"
            class="footer-link"
            rel="noopener noreferer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </nav>
    <p class="footer-copyright">Copyright &copy; 2022 Bradley Smith</p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  min-height: 15vh;
  align-items: center;
  justify-content: center;
  padding: 4rem 0 1.5rem 0;
  font-size: 0.9rem;
}

.footer-list-container {
  display: flex;
}

.footer-router {
  border-bottom: 3px solid transparent;

  &:hover {
    border-bottom: 3px solid $lightest-blue;
  }
}

.footer-column {
  list-style-type: none;
  width: 30%;
  opacity: 0.8;

  > li {
    margin-bottom: 0.5rem;
    letter-spacing: -0.5px;
  }
}

.footer-copyright {
  margin-top: 2rem;
  letter-spacing: 0.75px;
  width: 100%;
}

.footer-link {
  color: $not-black;
  border-bottom: 3px solid transparent;

  &:hover {
    border-bottom: 3px solid $lightest-blue;
  }
}
</style>
