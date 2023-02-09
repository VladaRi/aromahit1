import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/test",
    name: "test",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Test.vue"),
  },
  {
    path: "/battleShipGame",
    name: "battleShipGame",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BattleShipGame.vue"),
  },
  {
    path: "/test2",
    name: "test2",
    component: () =>
      import("../views/Test2.vue"),
  },
  {
    path: "/test3",
    name: "test3",
    component: () =>
      import("../views/Test3.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
