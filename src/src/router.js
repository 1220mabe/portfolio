import Vue from "vue";
import Router from 'vue-router'
import Top from "@/pages/Top";
import About from "@/pages/About";
import Skill from "@/pages/Skill";
import Work from "@/pages/Work";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      component: Top,
      name: 'top',
    },
    {
      path: '/about',
      component: About,
      name: 'about',
    },
    {
      path: '/skill',
      component: Skill,
      names: 'skill',
    },
    {
      path: '/work',
      component: Work,
      names: 'work',
    },
    {
      path: '*',
      component: NotFound,
      names: 'notFound',
    },
  ]
});
