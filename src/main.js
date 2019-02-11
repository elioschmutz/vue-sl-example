import Vue from 'vue'

import store from './store'
import SL from './SL.vue'


Vue.config.productionTip = false

let createSlot = (slotid) => {
    new Vue({
        render: h => h(SL, {props: { slotid }}),
        store,
    }).$mount(`#app-${slotid}`)

}

createSlot('main')
createSlot('left')
createSlot('right')
createSlot('footer1')
createSlot('footer2')
