import Vue from 'vue'
import Router from 'vue-router'
import Mine from '@/components/Mine/Mine'
import Cinema from '@/components/Cinema/Cinema'
import Film from '@/components/Film/Film'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cinema',
      component: Cinema
    },
    {
      path: '/Film',
      name: 'Film',
      component: Film
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
