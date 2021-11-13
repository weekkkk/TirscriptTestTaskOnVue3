import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";
import Main from "@/pages/Main.vue"
import ListPage from "@/pages/ListPage.vue"
import Description from "@/pages/Description.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/list",
    component: ListPage,
  },
  {
    path: "/about",
    component: Description,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;