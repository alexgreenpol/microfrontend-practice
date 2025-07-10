import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/vue",
    name: "vueAppPage",
    component: () => import("../pages/VueAppPage.vue"),
  },
  {
    path: "/react",
    name: "reactAppPage",
    component: () => import("../pages/ReactAppPage.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
