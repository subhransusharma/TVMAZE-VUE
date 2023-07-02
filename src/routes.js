import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from "./pages/Home.vue";
import Search from "./pages/Search.vue";
import ShowDetail from "./pages/ShowDetail.vue";
import NotFound from "./pages/NotFound.vue";
import Error from "./pages/Error.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/search", component: Search },
  { path: "/show/:id", component: ShowDetail },
  { path: "/error", component: Error },
  { path: "/*", component: NotFound },
];
export default new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (
      from &&
      to.name === from.name &&
      JSON.stringify(to.params) === JSON.stringify(from.params)
    ) {
      return;
    }
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
