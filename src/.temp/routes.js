const c1 = () => import(/* webpackChunkName: "page--src-pages-vdp-vue" */ "C:\\Users\\campa\\party-cinema\\src\\pages\\Vdp.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-om-backyard-experience-vue" */ "C:\\Users\\campa\\party-cinema\\src\\pages\\OmBackyardExperience.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-om-standard-services-vue" */ "C:\\Users\\campa\\party-cinema\\src\\pages\\OmStandardServices.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-om-vue" */ "C:\\Users\\campa\\party-cinema\\src\\pages\\Om.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-avp-vue" */ "C:\\Users\\campa\\party-cinema\\src\\pages\\Avp.vue")
const c6 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\campa\\party-cinema\\node_modules\\gridsome\\app\\pages\\404.vue")
const c7 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\campa\\party-cinema\\src\\pages\\Index.vue")
const c8 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\campa\\party-cinema\\src\\pages\\OmStandardServices.vue")

export default [
  {
    path: "/vdp/",
    component: c1
  },
  {
    path: "/om-backyard-experience/",
    component: c2
  },
  {
    path: "/om-standard-services/",
    component: c3
  },
  {
    path: "/om/",
    component: c4
  },
  {
    path: "/avp/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  },
]
