import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      redirect: "/home",
      component: () => import("../view/Layout.vue"),
      children: [
        {
          path: "home",
          component: () => import("../view/Home.vue"),
        },
      ],
    },
    {
      path: "/a",
      component: () => import("../view/Layout.vue"),
      children: [
        {
          path: "a",
          name: "A",
          meta: {
            name: 'A1'
          },
          component: () => import("../view/A1.vue"),
        },
      ],
    },
    {
      path: "/b",
      component: () => import("../view/Layout.vue"),
      children: [
        {
          path: "b",
          name: "B",
          meta: {
            name: 'A2'
          },
          component: () => import("../view/A2.vue"),
        },
      ],
    },
    {
      path: "/a",
      component: () => import("../view/Layout.vue"),
      children: [
        {
          path: "page1",
          name: "Page1",
          component: () => import("../view/Page1.vue"),
          children: [
            {
              path: "a",
              name: "AA",
              meta: {
                name: 'Page1'
              },
              component: () => import("../view/A1.vue"),
            },
          ],
        },
      ],
    },
    {
      path: "/b",
      component: () => import("../view/Layout.vue"),
      children: [
        {
          path: "page2",
          name: "Page2",
          component: () => import("../view/Page2.vue"),
          children: [
            {
              path: "b",
              name: "BB",
              meta: {
                name: 'Page2'
              },
              component: () => import("../view/A2.vue"),
            },
          ],
        },
      ],
    },
  ],
});

export default  router