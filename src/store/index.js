import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// should get something when we're authenticated
export default new Vuex.Store({
  state: {
    // currentMod in state after initial auth
    // allModules stored here also then currentMod changes when button click
    currentModule: {},
    allModules: []
  },
  mutations: {
    // mutations update state
    // appendNote to project in module
    // payload is all modules??
    setAllModules (state, payload) {
      state.allModules = payload
    }
  },
  actions: {
    // actions call mutations
    // addNote
    fetchCurrentModule () {
      // do api call for current
    },
    fetchAllModules () {
      // do api call for all modules
    }
  },
  modules: {
  },
  getters: {
    // getCurrentModule
    // getAllModules
  }
})

// getter to get data
// do api call once if small
// per module if it's medium amount
// in actions -- trigger dispatch to store to get modules
// load first module by default -- currentModule ??
// what does user want, what is their intent when using
// mapState. mapGetters
