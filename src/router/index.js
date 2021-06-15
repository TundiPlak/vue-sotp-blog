import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TheBlogs from "../views/TheBlogs.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: TheBlogs,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
