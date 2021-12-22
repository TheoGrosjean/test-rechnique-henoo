import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    technique: {
      frein: [],
      moteur: [],
      turbo: [],
      jante: []
    },
    data: [],
    form: {
      voiture: "",
      description: "",
      tags: ""
    }
  },
  mutations: {
    get_technique(state) {
      for (let i = 0; i <= state.data[0].length - 1; i++) {
        if (state.technique.frein.length === 0) {
          if (state.data[0][i].technique.frein != null)
            state.technique.frein.push(state.data[0][i].technique.frein)
        }
        else if (state.data[0][i].technique.frein != null) {
          for (let j = state.technique.frein.length - 1; j >= 0; j--) {
            if (state.technique.frein[j].name === state.data[0][i].technique.frein.name)
              break;
            else if (j - 1 < 0)
              state.technique.frein.push(state.data[0][i].technique.frein)
          }
        }

        if (state.technique.moteur.length === 0) {
          if (state.data[0][i].technique.moteur != null)
            state.technique.moteur.push(state.data[0][i].technique.moteur)
        }
        else if (state.data[0][i].technique.moteur != null) {
          for (let j = state.technique.moteur.length - 1; j >= 0; j--) {
            if (state.technique.moteur[j].name === state.data[0][i].technique.moteur.name)
              break;
            else if (j - 1 < 0)
              state.technique.moteur.push(state.data[0][i].technique.moteur)
          }
        }

        if (state.technique.turbo.length === 0) {
          if (state.data[0][i].technique.turbo != null)
            state.technique.turbo.push(state.data[0][i].technique.turbo)
        }
        else if (state.data[0][i].technique.turbo != null) {
          for (let j = state.technique.turbo.length - 1; j >= 0; j--) {
            if (state.technique.turbo[j].name === state.data[0][i].technique.turbo.name)
              break;
            else if (j - 1 < 0)
              state.technique.turbo.push(state.data[0][i].technique.turbo)
          }
        }

        if (state.technique.jante.length === 0) {
          if (state.data[0][i].technique.jante != null)
            state.technique.jante.push(state.data[0][i].technique.jante)
        }
        else if (state.data[0][i].technique.jante != null) {
          for (let j = state.technique.jante.length - 1; j >= 0; j--) {
            if (state.technique.jante[j].name === state.data[0][i].technique.jante.name)
              break;
            else if (j - 1 < 0)
              state.technique.jante.push(state.data[0][i].technique.jantes)
          }
        }
      }
    },

    get_json(state, json) {
        state.data = []
        state.data.push(json)
    },

    delete_car(state, car) {
      var p = state.data[0].indexOf(car)
      state.data[0].splice(p, 1)
    },
    set_color(state) {
      for (let i = 0; i <= state.data[0].length - 1; i++) {
        if (state.data[0][i].couleur.code.indexOf('#') === -1)
          state.data[0][i].couleur.code = "background-color: #" + state.data[0][i].couleur.code
      }
    },
    copie_car(state, car) {
      let cop  = JSON.parse(JSON.stringify(car));
      cop.id = parseInt(state.data[0][state.data[0].length - 1].id) + 1
      state.data[0].push(cop)
    },


    add_car_form(state, obj) {
      state.form.voiture = obj.voiture
      state.form.description = obj.description
      state.form.tags = obj.tags
    }
  }

})