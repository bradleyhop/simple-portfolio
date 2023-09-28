# Bradley Smith Portfolio

[Live Site at bradleysmith.tech](https://bradleysmith.tech)

[![Netlify Status](https://api.netlify.com/api/v1/badges/04bdc827-8852-4eab-8263-b2aa9e21435e/deploy-status)](https://app.netlify.com/sites/confident-curran-cd1577/deploys)

My professional portfolio's source code. Built as an SPA using Vue.js 3, Vue
Router, and SCSS.

Namecheap handles the domain name, and Netlify hosts the live site and
handles form submissions.

No CSS frameworks or component libraries were used in building this page. I
choose to build everything from scratch as part of a learning experience.

## Four-Hundos

The site meets Google's Lighthouse perfect scores for Performance,
Accessibility, Best Practices, and SEO on desktop and mobile devices.

## Note on Building and Serving Through Netlify

~~For dynamic routing to work, be sure to turn off any of Netlify's
asset optimization features (save image compression).~~ Netflify will be
depreciating all of their post-processing features on October 17, 2023.

Also, be sure to have a `_redirects`in the project's root directory file with
the content of `/* /index.html   200` in the `public/` directory of the project;
this file helps Netlify use Vue Router to serve dynamic views.
