import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Foo from '@/components/Foo.vue'
import Bar from '@/components/Bar.vue'
import GithubAccount from '@/components/GithubAccount'

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/foo', name: 'Foo', component: Foo },
    { path: '/bar/:id', name: 'Bar', component: Bar },
    { path: '/github/:pseudo', name: 'Github', component: GithubAccount}
  ]
})


