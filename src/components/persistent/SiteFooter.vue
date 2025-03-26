<script>
export default {
  name: "SiteFooter",

  data() {
    return {
      year: Object.freeze(new Date().getFullYear()),
    };
  },
};
</script>

<template>
  <footer>
    <div class="device-widths">
      <div class="footer-container">
        <div class="nav-container">
          <h3 id="footerNav" class="footer-header">
            <span class="footer-underline">NAVIGATION</span>
          </h3>
          <nav class="footer-list-container">
            <ul class="footer-column nav-list" aria-labelledby="footerNav">
              <li>
                <RouterLink to="/" class="clear-link-dec footer-router">
                  home
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  to="/portfolio"
                  class="clear-link-dec footer-router"
                >
                  portfolio
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/contact" class="clear-link-dec footer-router">
                  contact
                </RouterLink>
              </li>
            </ul>
          </nav>
        </div>

        <div class="contact-container">
          <h3 id="footerContact" class="footer-header">
            <span class="footer-underline">FIND ME AROUND THE WEB</span>
          </h3>
          <ul
            class="footer-column contact-list"
            aria-labelledby="footerContact"
          >
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
          </ul>
        </div>
      </div>
      <p class="footer-copyright">
        Copyright &copy; {{ year }} &mdash;
        <a
          href="https://github.com/bradleyhop/simple-portfolio"
          class="my-name-footer clear-link-dec"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bradley Smith
        </a>
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "@/assets/style/color" as *;

footer {
  align-items: center;
  padding-bottom: 1.1rem;
  font-size: 0.9rem;
  width: 100%;
  background-color: $lightest-blue;
}

.footer-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.footer-header {
  color: $not-black;
  margin: 3rem 0.5rem 0.5rem 0;
  font-size: 0.9rem;
  letter-spacing: 0.75px;
  line-height: 1.5;
  font-weight: bold;
}

.footer-underline {
  border-bottom: 4px solid $not-white;
}

.nav-list {
  text-transform: lowercase;
}

.footer-router {
  border-bottom: 3px solid transparent;

  &:hover {
    border-bottom: 3px solid $not-white;
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
  line-height: 1.5;
}

.footer-link {
  color: $not-black;
  border-bottom: 3px solid transparent;

  &:hover {
    border-bottom: 3px solid $not-white;
  }
}

.my-name-footer {
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
}
</style>
