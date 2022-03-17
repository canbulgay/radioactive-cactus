import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from "../store";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import("@/views/Login")
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: () => import("@/views/Register")
  },
  {
    path: '/new',
    name: 'NewBookmarkPage',
    component: () => import("@/views/NewBookmark")
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: () => import("@/views/Account")
  },
  {
    path: '/likes',
    name: 'Likes',
    component: () => import("@/views/Account")
  },
  {
    path: '/settings',
    name: 'Likes',
    component: () => import("@/views/Account")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, _, next) => {
  const authRequiredRoutes = ["HomePage"];
  const _isAuthenticated = store.getters._isAuthenticated;
  const authNotRequiredRoutes = ["LoginPage","RegisterPage"];


  if(authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated) next(false);
  if(authRequiredRoutes.indexOf(to.name) > -1){
    if(_isAuthenticated) next();
    else next({ name : "Login"});
  }else {
    next();
  }
})

export default router
