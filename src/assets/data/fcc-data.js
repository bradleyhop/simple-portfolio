/*
 * projects variable which holds data on each freeCodeCamp module and project that I have completed
 */

const fCC = [
  {
    title: "Data Visualization with D3.js",
    copy: "This courses teaches data visualization utilizing the D3.js library to draw various presentations of data while working with JSON and APIs to fetch the data. I completed the projects using the Vue CLI to develop and build the projects in Vue.js. I took heavy inspiration from Google's Material Design to guide my design choices.",
    projects: [
      {
        title: "Treemap Diagram",
        link: "https://bradleyhop.github.io/d3-treemap-build/",
        img: {
          src: "treemap.jpg",
          webp: "treemap.webp",
          alt: "screenshot of treemap diagram project",
        },
        github: "https://github.com/bradleyhop/d3-treemap-diagram",
      },
      {
        title: "Choropleth Map",
        link: "https://bradleyhop.github.io/d3-choropleth-build/",
        img: {
          src: "choropleth.jpg",
          webp: "choropleth.webp",
          alt: "screenshot of choropleth map project",
        },
        desc: "A freeCodeCamp project, this app visualizes data with a heat map. Built using D3.js, Vue.js, Sass. Fullfils 17 user stories; passes testing",
        github: "https://github.com/bradleyhop/d3-choropleth",
      },
      {
        title: "Heat Map",
        desc: "A freeCodeCamp project, this app visualizes data with a heat map. Built using D3.js, Vue.js, Sass.",
        link: "https://bradleyhop.github.io/d3-heatmap-build/",
        img: {
          src: "heatmap.jpg",
          webp: "heatmap.webp",
          alt: "screenshot of heat map project",
        },
        github: "https://github.com/bradleyhop/d3-heat-map",
      },
      {
        title: "Scatterplot Graph",
        link: "https://bradleyhop.github.io/d3-scatterplot-build/",
        img: {
          src: "scatterplot.jpg",
          webp: "scatterplot.webp",
          alt: "screenshot of scatterplot graph project",
        },
        github: "https://github.com/bradleyhop/d3-scatter-plot",
      },
      {
        title: "Bar Chart",
        link: "https://bradleyhop.github.io/d3-barchart-build/",
        img: {
          src: "barChart.jpg",
          webp: "barChart.webp",
          alt: "screenshot for bar chart project",
        },
        github: "https://github.com/bradleyhop/d3-bar-chart",
      },
    ],
  },
  {
    title: "Front End Libraries Certification",
    copy: "The third certification of the freeCodeCamp curriculum. This section teaches the use of various libraries for html, css, and javascript. On each project, there is a green hamburger icon in the top left corner that opens the testing suite for that particular project. The user stories are listed therein (be sure that the correct project is selected in the drop-down menu).",
    projects: [
      {
        title: "Pomodoro Timer",
        desc: "A freeCodeCamp project, this app is a timer to help focus and productivity. Using my own design, a Zen enso draws as timer counts down. The project is now titled '25 + 5 timer' in the testing software.",
        link: "https://bradleyhop.github.io/pomodoroTimer/",
        img: {
          src: "pomodoroTimer.jpg",
          webp: "pomodoroTimer.webp",
          alt: "screenshot of pomodoro timer app",
        },
        github:
          "https://github.com/bradleyhop/bradleyhop.github.io/tree/master/pomodoro-timer/",
      },
      {
        title: "Javascript Calculator",
        copy: "Mimics funtions of the Texas Instruments SR-10 calculator.",
        link: "https://bradleyhop.github.io/js-calculator/",
        img: {
          src: "jsCalculator.jpg",
          webp: "jsCalculator.webp",
          alt: "screenshot of markdown to javascript calculator",
        },
        github:
          "https://github.com/bradleyhop/bradleyhop.github.io/tree/master/js-calculator/",
      },
      {
        title: "Drum Machine",
        copy: "Plays sounds on keypress or button press.",
        link: "https://bradleyhop.github.io/drumMachine/",
        img: {
          src: "drumMachine.jpg",
          webp: "drumMachine.webp",
          alt: "screenshot of game boy inspired drum machine",
        },
        github:
          "https://github.com/bradleyhop/bradleyhop.github.io/tree/master/drum-machine/",
      },
      {
        title: "Markdown Previewer",
        copy: "Provides realtime preview of markdown text to html. Does not pass unit tests because it uses Vue, which is unsupoorted,  but does pass the user stories; see README in github for more info.",
        link: "https://bradleyhop.github.io/markdownPreviewer/markdownPre.html",
        img: {
          src: "markdownPreviewer.jpg",
          webp: "markdownPreviewer.webp",
          alt: "screenshot of markdown to html previewer",
        },
        github:
          "https://github.com/bradleyhop/bradleyhop.github.io/tree/master/markdownPreviewer/",
      },
      {
        title: "Random Quote Machine",
        copy: "Fetches and displays a random programming themed quote on button press.",
        link: "https://bradleyhop.github.io/randomQuotes/randomQuote.html",
        img: {
          src: "randomQuoteGenerator.jpg",
          webp: "randomQuoteGenerator.webp",
          alt: "screenshot of random quote machine",
        },
        github:
          "https://github.com/bradleyhop/bradleyhop.github.io/tree/master/randomQuotes/",
      },
    ],
  },
  {
    title: "Javascript Algorithms and Data Structures",
    copy: "The second certification of the freeCodeCamp curriculum. This sections teaches javascript syntax and data structures. I have solved all of the three levels of algorithm challenges. This section deals with solely with learning basic programming skills through javascript.",
    projects: [
      {
        title: "Javascript Algorithms and Data Structures",
        link: "https://github.com/bradleyhop/freeCodeCampAlgorithms",
        img: {
          src: "jsCert.jpg",
          webp: "jsCert.webp",
          alt: "javascript algorithm certification",
        },
        github: "",
      },
    ],
  },
  {
    title: "Responsive Web Design",
    copy: "The first certification of the freeCodeCamp curriculum. This section teaches html and css to complete five projects each with their own use story requirements.  On each project, there is a green hamburger icon in the top left corner that opens the testing suite for that particular project. The user stories are listed therein (be sure that the correct project is selected in the drop-down menu).",
    projects: [
      {
        title: "Personal Profile",
        link: "https://bradleyhop.github.io/",
        img: {
          src: "portfolio.jpg",
          webp: "portfolio.webp",
          alt: "screenshot of portfolio webpage",
        },
        github: "https://github.com/bradleyhop/bradleyhop.github.io",
      },
      {
        title: "Technical Documentation",
        link: "https://bradleyhop.github.io/techDoc/techDoc.html",
        img: {
          src: "fccTechDoc.jpg",
          webp: "fccTechDoc.webp",
          alt: "screenshot of technical documentation project",
        },
        github:
          "https://github.com/bradleyhop/bradleyhop.github.io/tree/master/techDoc",
      },
      {
        title: "Product Landing Page",
        link: "https://bradleyhop.github.io/productLandingPage/productLandingPage.html",
        img: {
          src: "fccProductLanding.jpg",
          webp: "fccProductLanding.webp",
          alt: "screenshot of product landing page",
        },
        github:
          "https://github.com/bradleyhop/bradleyhop.github.io/tree/master/productLandingPage",
      },
      {
        title: "Survey Form",
        link: "https://bradleyhop.github.io/surveyForm/surveyForm.html",
        img: {
          src: "survey.jpg",
          webp: "survey.webp",
          alt: "screenshot of survey form",
        },
        github:
          "https://github.com/bradleyhop/bradleyhop.github.io/tree/master/surveyForm",
      },
      {
        title: "Tribute",
        link: "https://bradleyhop.github.io/tribute/tribute.html",
        img: {
          src: "tribute.jpg",
          webp: "tribute.webp",
          alt: "screenshot of tribute webpage to Frankie Manning",
        },
        github:
          "https://github.com/bradleyhop/bradleyhop.github.io/tree/master/tribute",
      },
    ],
  },
];

export default fCC;
