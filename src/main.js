import Vue from 'vue'

import store from './store'
import SL from './SL.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(SL, {props: { slotid: 'main' }}),
  store,
}).$mount('#app-center')

new Vue({
  render: h => h(SL, {props: { slotid: 'left' }}),
  store,
}).$mount('#app-left')

new Vue({
  render: h => h(SL, {props: { slotid: 'right' }}),
  store,
}).$mount('#app-right')
