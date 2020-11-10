export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/',
        component: './home',
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
]
