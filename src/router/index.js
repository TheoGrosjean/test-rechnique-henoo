import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import TablePage from "@/pages/TablePage";
import PiecesPage from "@/pages/PiecesPage";
import NewCars from "@/pages/NewCars"
import Form from "@/pages/PrintForm"

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/table',
      name: 'table',
      component: TablePage
    },
    {
      path : '/pieces',
      name : 'pieces',
      component: PiecesPage
    },
    {
      path : '/newCars',
      name : 'NewCars',
      component: NewCars
    },
    {
      path : '/Form',
      name : 'Form',
      component: Form
    }
  ]
})
