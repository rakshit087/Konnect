import { createRouter, createWebHistory } from "vue-router";
import Authenticate from "../views/Authenticate.vue";
import Dashboard from "../views/Dashboard.vue";
const routes = [
  {
    path: "/authenticate",
    name: "authenticate",
    component: Authenticate
  },
  {
    path: "/",
    name: "dashboard",
    component: Dashboard
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
