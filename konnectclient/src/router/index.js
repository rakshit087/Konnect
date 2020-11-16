import { createRouter, createWebHistory } from "vue-router";
import Authenticate from "../views/Authenticate.vue";
import Dashboard from "../views/Dashboard.vue";
import Profile from "../views/ProfilePage.vue";
import store from "@/store";
store.getters.config;
const routes = [
  {
    path: "/authenticate",
    name: "authenticate",
    component: Authenticate
  },
  {
    path: "/:name",
    name: "dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true
    },
    props: true
  },
  {
    path: "/Profile/:profileId",
    name: 'profile',
    component: Profile,
    meta: {
      requiresAuth: true
    },
    props: true
  },
  {
    path: "/",
    name: "home",
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.isAuthenticated == false) {
      next({
        path: "/authenticate"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
