<script>
export default {
  name: "SiteFooter",
};
</script>

<template>
  <footer>
    <nav class="footer-list-container">
      <ul class="footer-column nav-list">
        <li>
          <RouterLink to="/" class="clear-link-dec footer-router">
            home
          </RouterLink>
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
            target="_blank"
            class="footer-link"
            rel="noopener noreferrer"
            title="my GitHub profile"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://frontendmentor.io/profile/bradleyhop"
            target="_blank"
            class="footer-link"
            rel="noopener noreferrer"
            title="my Frontend Mentor profile"
          >
            Frontend Mentor
          </a>
        </li>
        <li>
          <a
            href="https://freecodecamp.org/bradleyhop"
            target="_blank"
            class="footer-link"
            rel="noopener noreferrer"
            title="my freeCodeCamp profile"
          >
            freeCodeCamp
          </a>
        </li>
        <li>
          <!-- fix link -->
          <a
            href="https://github.com/bradleyhop"
            target="_blank"
            class="footer-link"
            rel="noopener noreferrer"
            title="my Codewars profile"
          >
            Codewars
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/bradley-smith-328235112/"
            target="_blank"
            class="footer-link"
            rel="noopener noreferrer"
            title="my LinkedIn profile"
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
  margin: 2.5rem 0 2rem 0;
  letter-spacing: 0.75px;
}

.footer-link {
  color: $not-black;
  border-bottom: 3px solid transparent;

  &:hover {
    border-bottom: 3px solid $lightest-blue;
  }
}
</style>
