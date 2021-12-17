import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data : []
  },
  mutations: {
    get_json (state, json) {
      if (state.data.length === 0)
          state.data.push(json)
      console.log(state.data)
    },
    delete_car(state, car) {
      var p = state.data[0].indexOf(car)
      state.data[0].splice(p, 1)
      console.log(p)
    }
  }

})