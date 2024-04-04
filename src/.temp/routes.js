const c1 = () => import(/* webpackChunkName: "page--src-pages-video-dance-party-faq-vue" */ "C:\\Pratham\\fiverr\\playadvertising\\party-cinema\\src\\pages\\VideoDancePartyFaq.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-video-dance-party-vue" */ "C:\\Pratham\\fiverr\\playadvertising\\party-cinema\\src\\pages\\VideoDanceParty.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-thank-you-vue" */ "C:\\Pratham\\fiverr\\playadvertising\\party-cinema\\src\\pages\\ThankYou.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-outdoor-movies-drive-in-theatre-vue" */ "C:\\Pratham\\fiverr\\playadvertising\\party-cinema\\src\\pages\\OutdoorMoviesDriveInTheatre.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-outdoor-movies-backyard-experience-vue" */ "C:\\Pratham\\fiverr\\playadvertising\\party-cinema\\src\\pages\\OutdoorMoviesBackyardExperience.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-outdoor-movies-movie-licensing-vue" */ "C:\\Pratham\\fiverr\\playadvertising\\party-cinema\\src\\pages\\OutdoorMoviesMovieLicensing.vue")
const c7 = () => import(/* webpackChunkName: "page--src-pages-outdoor-movies-standard-services-vue" */ "C:\\Pratham\\fiverr\\playadvertising\\party-cinema\\src\\pages\\OutdoorMoviesStandardServices.vue")
const c8 = () => import(/* webpackChunkName: "page--src-pages-outdoor-movies-faq-vue" */ "C:\\Pratham\\fiverr\\playadvertising\\party-cinema\\src\\pages\\OutdoorMoviesFaq.vue")
const c9 = () => import(/* webpackChunkName: "page--src-pages-outdoor-movies-vue" */ "C:\\Pratham\\fiverr\\playadvertising\\party-cinema\\src\\pages\\OutdoorMovies.vue")
const c10 = () => import(/* webpackChunkName: "page--src-pages-avp-vue" */ "C:\\Pratham\\fiverr\\playadvertising\\party-cinema\\src\\pages\\Avp.vue")
const c11 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Pratham\\fiverr\\playadvertising\\party-cinema\\node_modules\\gridsome\\app\\pages\\404.vue")
const c12 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Pratham\\fiverr\\playadvertising\\party-cinema\\src\\pages\\Index.vue")

export default [
  {
    path: "/video-dance-party-faq/",
    component: c1
  },
  {
    path: "/video-dance-party/",
    component: c2
  },
  {
    path: "/thank-you/",
    component: c3
  },
  {
    path: "/outdoor-movies-drive-in-theatre/",
    component: c4
  },
  {
    path: "/outdoor-movies-backyard-experience/",
    component: c5
  },
  {
    path: "/outdoor-movies-movie-licensing/",
    component: c6
  },
  {
    path: "/outdoor-movies-standard-services/",
    component: c7
  },
  {
    path: "/outdoor-movies-faq/",
    component: c8
  },
  {
    path: "/outdoor-movies/",
    component: c9
  },
  {
    path: "/avp/",
    component: c10
  },
  {
    name: "404",
    path: "/404/",
    component: c11
  },
  {
    name: "home",
    path: "/",
    component: c12
  },
  {
    name: "*",
    path: "*",
    component: c11
  }
]
