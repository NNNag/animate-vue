import Vue from 'vue'
import Router from 'vue-router'
import WelcomeComponent from '@/components/WelcomePage'
import AboutComponent from '@/components/AboutPage'
import ServiceComponent from '@/components/ServicePage'
import ListComponent from '@/components/List'
import DrawerComponent from '@/components/Drawer'
import CardsComponent from '@/components/Cards'
import SimpleComponent from '@/components/Simple'
import StaggerComponent from '@/components/Stagger'
import StateComponent from '@/components/State'
import TimelineComponent from '@/components/Timeline'
import MasterComponent from '@/components/Master'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'nameFromWelcomeComponent',
      component: WelcomeComponent
    },
    {
      path: '/about',
      name: 'nameFromAboutComponent',
      component: AboutComponent
    },
    {
      path: '/service',
      name: 'nameFromServiceComponent',
      component: ServiceComponent
    },
    {
      path: '/list',
      name: 'nameFromListComponent',
      component: ListComponent
    },
    {
      path: '/drawer',
      name: 'drawer',
      component: DrawerComponent
    },
    {
      path: '/cards',
      name: 'cards',
      component: CardsComponent
    },
    {
      path: '/simple',
      name: 'simple',
      component: SimpleComponent
    },
    {
      path: '/stagger',
      name: 'stagger',
      component: StaggerComponent
    },
    {
      path: '/state',
      name: 'state',
      component: StateComponent
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: TimelineComponent
    },
    {
      path: '/master',
      name: 'master',
      component: MasterComponent
    }
  ]
})
