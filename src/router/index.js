import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import PostsIndex from '@/components/posts/Index.vue'
import PostsShow from '@/components/posts/Show.vue'
import PostsNew from '@/components/posts/New.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/postsIndex',
      name: 'Posts.index',
      component: PostsIndex
    },
    {
      path: '/posts/:id',
      name: 'Posts.show',
      component: PostsShow
    },
    {
      path: '/posts/new',
      name: 'Posts.new',
      component: PostsNew
    }
  ]
})
