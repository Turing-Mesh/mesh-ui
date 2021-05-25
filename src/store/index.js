import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// should get something when we're authenticated
export default new Vuex.Store({
  state: {
    currentModule: {},
    allModules: [],
    currentProject: {},
    selectedProject: {},
    myStudents: [],
    currentStudent: {}
  },
  mutations: {
    // mutations update state
    setCurrentModule (state, payload) {
      state.currentModule = payload
    },
    setAllModules (state, singleModule) {
      state.allModules.push(singleModule)
    },
    setCurrentProject (state, payload) {
      state.currentProject = payload
    },
    setMyStudents (state, myStudents) {
      state.myStudents = myStudents
    },
    setCurrentStudent (state, foundStudent) {
      state.currentStudent = foundStudent
    }
  },
  actions: {
    // actions call mutations
    fetchModule ({ commit }, { moduleId, studentId }) {
      return fetch(`https://shrouded-citadel-55795.herokuapp.com/api/v1/students/${studentId}/student_projects?mod=${moduleId}`)
        .then(response => response.json())
        .then(data => {
          commit('setAllModules', data)
        })
    },
    addNoteToProject (context, { projectId, note }) {
      return fetch(`https://shrouded-citadel-55795.herokuapp.com/api/v1/students/94/student_projects/${projectId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ student_comments: note })
      })
        .then(response => response.json)
        .then(data => {
          context.commit('setCurrentProject', data)
        })
    },
    fetchMyStudents (context, module) {
      return fetch(`https://shrouded-citadel-55795.herokuapp.com/api/v1/instructors/122/students?mod=${module}`)
        .then(response => response.json())
        .then(data => {
          context.commit('setMyStudents', data)
        })
    },
    setStudentData (context, studentId) {
      const foundStudent = this.state.myStudents.data.find(student => student.id === studentId)
      if (foundStudent) {
        context.commit('setCurrentStudent', foundStudent)
      }
    }
  },
  modules: {
  },
  getters: {
    getSelectedProject: (state) => (selectedModuleNum, selectedProjectNum) => {
      const foundModule = state.allModules.find(dataSet => Number(dataSet.data.attributes.mod) === selectedModuleNum)
      if (foundModule.data.attributes.student_projects) {
        return foundModule.data.attributes.student_projects.find(dataSet => Number(dataSet.project_number) === selectedProjectNum)
      } else {
        return undefined
      }
    }
    // getCurrentModule
    // getAllModules
    // currentModuleProjects (state, getters) {
    // state.currentModule.projects
    //   console.log('mod projects FROM STORE: ', state.currentModule.data.attributes.student_projects)
    //   return state.currentModule.data.attributes.student_projects
    // },
    // getCurrentModule (state, getters) {
    // const sortedModules = this.state.allModules.sort((a, b) => a - b)
    // }
    // getStudentData: (state) => (studentId) => {
    //   const foundStudent = state.myStudents.data.find(student => student.id === studentId)
    //   if (foundStudent) {
    //     context.commit('setCurrentStudent', foundStudent)
    //   }
    // }
  }
})

// getter to get data
// do api call once if small
// per module if it's medium amount
// in actions -- trigger dispatch to store to get modules
// load first module by default -- currentModule ??
// what does user want, what is their intent when using
// mapState. mapGetters
