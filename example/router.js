import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  },
  // 下拉刷新
  {
    path: '/pulldown',
    name: 'pulldown',
    component: () => import('./pages/PullDown.vue')
  },
  // 上拉加载
  {
    path: '/infinitescroll',
    name: 'infinitescroll',
    component: () => import('./pages/InfiniteScroll.vue')
  },
  // 操作反馈  toast  loading  dialog
  {
    path: '/feedback',
    name: 'feedback',
    component: () => import('./pages/FeedBack.vue')
  },
  // 选项卡
  {
    path: '/tab',
    name: 'tab',
    component: () => import('./pages/Tab.vue')
  },
  // 模态框
  {
    path: '/popup',
    name: 'popup',
    component: () => import('./pages/Popup.vue')
  },
  // 开关
  {
    path: '/switch',
    name: 'switch',
    component: () => import('./pages/Switch.vue')
  },
  // 复选框
  {
    path: '/checkBox',
    name: 'checkBox',
    component: () => import('./pages/CheckBox.vue')
  },
  // 滑块
  {
    path: '/slider',
    name: 'slider',
    component: () => import('./pages/Slider.vue')
  },
  // 搜索
  {
    path: '/search',
    name: 'search',
    component: () => import('./pages/Search.vue')
  }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

export default router
