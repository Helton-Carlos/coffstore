import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cafes from '../views/Cafes.vue'

const routes = [
  {
    path: '/home',
    redirect: '/',
  },
  {
    path: '/',
    name: 'Home',
    component: Home,

  },
  {
    path: '/Acessorios',
    name: 'Acessorios',
    component: () => import(/* webpackChunkName: "about" */ '../views/Acessorios.vue')
  },
  {
    path: '/Contatos',
    name: 'Contatos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contatos.vue')
  },
  {
    path: '/Cha',
    name: 'Cha',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cha.vue')
  },
  {
    path: '/Cafes',
    name: 'Cafes',
    component: Cafes
  },
  {
    path: '/Cafeteiras',
    name: 'Cafeteiras',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cafeteiras.vue')
  },
  {
    path: '/Cadastrar',
    name: 'Cadastrar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cadastrar.vue')
  },
  {
    path: '/Produtos/:id',
    name: 'Produtos',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Produtos.vue')
  },
    {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
