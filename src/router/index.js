import Vue from 'vue'
import Router from 'vue-router'
import LoginView from '../views/LoginView'
import RegisterView from '../views/RegisterView'
import StatusView from '../views/StatusView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/pages/'
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView,
    },
    {
      path: '/reg',
      name: 'RegisterView',
      component: RegisterView,
    },
    {
      path: '/status',
      name: 'StatusView',
      component: StatusView,
    }

  ]
})
