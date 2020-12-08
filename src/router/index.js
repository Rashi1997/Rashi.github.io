import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Rashi Dhar",
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      title: "ABOUT | Rashi Dhar",
    },
  },
  {
    path: "/work",
    name: "Work",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Work.vue"),
    meta: {
      title: "WORK | Rashi Dhar",
    },
  },
  {
    path: "/cupcake-redesign",
    name: "Redesign",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Redesign.vue"),
    meta: {
      title: "WORK | Cupcake Redesign",
    },
  },
  {
    path: "/ilk-design",
    name: "Design",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Design.vue"),
    meta: {
      title: "WORK | Ilk Design",
    },
  },
  {
    path: "/beehive",
    name: "Taskhub",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Taskhub.vue"),
    meta: {
      title: "WORK | Beehive",
    },
  },
  {
    path: "/repo-hub",
    name: "Repohub",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Repohub.vue"),
    meta: {
      title: "WORK | Repohub",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Rashi Dhar";
  next();
});
export default router;
