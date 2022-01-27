const c1 = () => import(/* webpackChunkName: "page--src-pages-vdp-vue" */ "C:\\Users\\campa\\party-cinema\\src\\pages\\Vdp.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-outdoor-movies-drive-in-theatre-vue" */ "C:\\Users\\campa\\party-cinema\\src\\pages\\OutdoorMoviesDriveInTheatre.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-outdoor-movies-backyard-experience-vue" */ "C:\\Users\\campa\\party-cinema\\src\\pages\\OutdoorMoviesBackyardExperience.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-outdoor-movies-movie-licensing-vue" */ "C:\\Users\\campa\\party-cinema\\src\\pages\\OutdoorMoviesMovieLicensing.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-outdoor-movies-standard-services-vue" */ "C:\\Users\\campa\\party-cinema\\src\\pages\\OutdoorMoviesStandardServices.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-outdoor-movies-faq-vue" */ "C:\\Users\\campa\\party-cinema\\src\\pages\\OutdoorMoviesFaq.vue")
const c7 = () => import(/* webpackChunkName: "page--src-pages-outdoor-movies-vue" */ "C:\\Users\\campa\\party-cinema\\src\\pages\\OutdoorMovies.vue")
const c8 = () => import(/* webpackChunkName: "page--src-pages-avp-vue" */ "C:\\Users\\campa\\party-cinema\\src\\pages\\Avp.vue")
const c9 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\campa\\party-cinema\\node_modules\\gridsome\\app\\pages\\404.vue")
const c10 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\campa\\party-cinema\\src\\pages\\Index.vue")

export default [
  {
    path: "/vdp/",
    component: c1
  },
  {
    path: "/outdoor-movies-drive-in-theatre/",
    component: c2
  },
  {
    path: "/outdoor-movies-backyard-experience/",
    component: c3
  },
  {
    path: "/outdoor-movies-movie-licensing/",
    component: c4
  },
  {
    path: "/outdoor-movies-standard-services/",
    component: c5
  },
  {
    path: "/outdoor-movies-faq/",
    component: c6
  },
  {
    path: "/outdoor-movies/",
    component: c7
  },
  {
    path: "/avp/",
    component: c8
  },
  {
    name: "404",
    path: "/404/",
    component: c9
  },
  {
    name: "home",
    path: "/",
    component: c10
  },
  {
    name: "*",
    path: "*",
    component: c9
  }
]
