import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../components/Login.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/Login.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../components/Dashboard.vue"),
  },
  {
    path: "/logout",
    name: "logout",
    component: () => import("../components/Logout.vue"),
  },
  {
    path: "/azure-cloud-quiz",
    name: "1",
    component: () => import("../components/AzCloud_Quiz.vue"),
  },
  {
    path: "/google-cloud-quiz",
    name: "2",
    component: () => import("../components/GCloud_Quiz.vue"),
  },
  {
    path: "/dot-net-quiz",
    name: "3",
    component: () => import("../components/DN_Quiz.vue"),
  },
  {
    path: "/java-quiz",
    name: "4",
    component: () => import("../components/JAVA_Quiz.vue"),
  },
  {
    path: "/vue-quiz",
    name: "5",
    component: () => import("../components/Vue_Quiz.vue"),
  },
  {
    path: "/angular-quiz",
    name: "6",
    component: () => import("../components/Angular_Quiz.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
