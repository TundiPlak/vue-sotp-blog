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
    meta: {
      title : 'Home'
    }
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: TheBlogs,
    meta: {
      title: 'Blogs'
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to, from) =>{
  console.log(from, to)
  document.title = to.meta.title
})

export default router;
