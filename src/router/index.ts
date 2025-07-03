import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layout/index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Layout,
    },
  ],
});

export default router;
