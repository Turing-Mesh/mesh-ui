import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // currentMod in state after initial auth
    // allModules stored here also then currentMod changes when button click
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

// getter to get data
// do api call once if small
// per module if it's medium amount
// in actions -- trigger dispatch to store to get modules
// load first module by default -- currentModule ??
// what does user want, what is their intent when using
// mapState. mapGetters
