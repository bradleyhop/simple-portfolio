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
        <li>
          <RouterLink to="/contact" class="clear-link-dec footer-router">
            contact
          </RouterLink>
        </li>
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
            GitHub
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
            href="https://www.codewars.com/users/bradleyhop"
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
            href="https://wakatime.com/@bradleyhop"
            target="_blank"
            class="footer-link"
            rel="noopener noreferrer"
            title="my freeCodeCamp profile"
          >
            WakaTime
          </a>
        </li>
      </ul>
    </nav>
    <p class="footer-copyright">
      Copyright &copy; 2023 &mdash;
      <a
        href="https://github.com/bradleyhop/simple-portfolio"
        class="my-name-footer clear-link-dec"
        target="_blank"
        rel="noopener noreferrer"
      >
        Bradley Smith
      </a>
    </p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.footer-list-container {
  display: flex;
}

.nav-list {
  text-transform: lowercase;
}

.footer-router {
  border-bottom: 3px solid transparent;

  &:hover {
    border-bottom: 3px solid $lightest-blue;
  }
}

.footer-column {
  list-style-type: none;
  width: 15rem;
  opacity: 0.8;

  > li {
    font-size: 1.1rem;
    letter-spacing: 0.5px;
    margin-bottom: 0.9rem;
  }
}

.footer-copyright {
  color: $not-black;
  margin: 3rem 0.5rem 1rem 0;
  font-size: 0.9rem;
  letter-spacing: 0.75px;
  line-height: 150%;
}

.footer-link {
  color: $not-black;
  border-bottom: 3px solid transparent;

  &:hover {
    border-bottom: 3px solid $lightest-blue;
  }
}

.my-name-footer {
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
}
</style>
