import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "../views/HomePage.vue";
import AllFilmsPage from "../views/AllFilmsPage.vue";
import FilmPage from "../views/FilmPage.vue";
import FilmsLayout from "../views/FilmsLayout.vue";

import NotFound from "../views/404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/films",
    // name: "filmsLayout",
    component: FilmsLayout,
    children: [
      {
        path: "",
        name: "films",
        component: AllFilmsPage,
      },
      {
        path: ":id",
        name: "filmPage",
        component: FilmPage,
      //  чи буде доступ якшо в MainHeader auth = false
        beforeEnter: (to, from, next) => {
          if(localStorage.getItem('auth')) {
            next()
          } else {
            next({ name: "films"})
          }
        }
      },
      {
        path: "*/*",
        redirect: {name: "films"}
      },
    ]
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    window.scrollTo(0,0);
  }
});

export default router;
