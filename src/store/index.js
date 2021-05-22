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
    setCurrentModule (state, payload) {
      state.currentModule = payload
    }
  },
  actions: {
    // actions call mutations
    // addNote
    // fetchCurrentModule () {
    //   // do api call for current
    //   fetch('https://shrouded-citadel-55795.herokuapp.com/api/v1/students/1/student_projects?mod=1')
    //     .then(response => response.json())
    //     .then(data => {
    //       // state.allModules = data
    //       console.log('all data FROM STORE: ', data)
    //     })
    // },
    fetchModule (context, module) {
      // do api call for all modules
      // this is only getting one module, so it will need to be fixed for all modules ???
      return fetch(`https://shrouded-citadel-55795.herokuapp.com/api/v1/students/1/student_projects?mod=${module}`)
        .then(response => response.json())
        .then(data => {
          context.commit('setCurrentModule', data)
          console.log('all data FROM STORE: ', data)
        })
    }
  },
  modules: {
  },
  getters: {
    // getCurrentModule
    // getAllModules
    currentModuleProjects (state, getters) {
      // state.currentModule.projects
      console.log('mod projects FROM STORE: ', state.currentModule.data.attributes.student_projects)
      return state.currentModule.data.attributes.student_projects
    }
  }
})

// getter to get data
// do api call once if small
// per module if it's medium amount
// in actions -- trigger dispatch to store to get modules
// load first module by default -- currentModule ??
// what does user want, what is their intent when using
// mapState. mapGetters
