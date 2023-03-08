import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  //默认的地址
  { path: "/", redirect: "/home" },
  //首页的地址
  { path: "/home", component: () => import("../views/Home/HomeCom.vue") },
  //用户的地址
  { path: "/user", component: () => import("../views/User/UserCom.vue") },
  // 用户登入的地址
  { path: "/login", component: () => import("../views/User/LoginCom.vue") },
];

const router = new VueRouter({
  routes,
});

export default router;
