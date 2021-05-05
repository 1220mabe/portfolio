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
  ]
});

// const routes = [
//   {
//     path: '/',
//     component: Top,
//     name: 'top',
//   },
//   {
//     path: '/about',
//     component: About,
//     name: 'about',
//   },
//   {
//     path: '/skill',
//     component: Skill,
//     names: 'skill',
//   },
//   {
//     path: '/work',
//     component: Work,
//     names: 'work',
//   },
// ];
//
// export const router = VueRouter.createRouter({
//   base: 'public',
//   mode: 'history',
//   routes
// })



// Vue.createApp(App).use(router).mount('#app');


// Vue.use(Router);
// export default new Router({
//   mode: "history",
//   routes: [
//     {
//       path: '/',
//       component: Top,
//       name: 'top',
//     },
//     {
//       path: '/about',
//       component: About,
//       name: 'about',
//     },
//     {
//       path: '/skill',
//       component: Skill,
//       names: 'skill',
//     },
//     {
//       path: '/work',
//       component: Work,
//       names: 'work',
//     },
//   ]
// });
