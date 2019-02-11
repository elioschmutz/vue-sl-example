import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    layouts: {
        main: ['one', 'two'],
        left: ['three', 'four'],
        right: ['five', 'six']
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store
