import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Button from "../views/Button.vue"
import Footer from "../views/Footer.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/button",
    name:"Button",
    component:Button
  },
  {
    path: "/footer",
    name: "Footer",
    component:Footer,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
