import Vue from 'vue'
import Router from 'vue-router'
// //Import new component
import AdjForNoun from '@/views/AdjForNoun'
import Sol from '@/views/Sol'
// import StationMap from '@views/StationMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sol',
      component: Sol
    },
    {
      path: '/adjfornoun',
      name: 'adjfornoun',
      component: AdjForNoun
    }, 
    // TODO: Add new route definition here.
    // {
    //   path: '/stationmap',
    //   name: 'stationmap',
    //   component: StationMap
    // }, 
  ]
})
