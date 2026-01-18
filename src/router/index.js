import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import ProjectsPage from "../pages/ProjectsPage.vue";
import ProjectDetailPage from "../pages/ProjectDetailPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/progetti",
      name: "projects",
      component: ProjectsPage,
    },
    {
      path: "/progetti/:slug",
      name: "project-detail",
      component: ProjectDetailPage,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 };
  },
});

export default router;
