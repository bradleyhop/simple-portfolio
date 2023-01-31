# Bradley Smith Portfolio

[Live Site at bradleysmith.tech](https://bradleysmith.tech)

My professional portfolio's source code. Built as an SPA using Vue.js 3, Vue
Router, and SASS.

Namecheap handles the domain name, and Netlify hosts the live site. Netlify also
handles form submissions, which triggers a service on Zappier to send the form
submission to my email account.

No CSS frameworks or component libraries were used in building this page. I
choose to build everything as part of a learning experience.

## Note on Building and Serving Through Netlify

For Vue Router dynamic routing to work, be sure to turn off any of Netlify's
asset optimization features (save image compression). Of course, be sure to
have the `_redirects` file with the content of `/*    /index.html   200` in the
`public/` directory of the project; this file helps Netlify use Vue Router to
serve dynamic views.
