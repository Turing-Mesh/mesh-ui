import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// should get something when we're authenticated
export default new Vuex.Store({
  state: {
    // currentMod in state after initial auth
    // allModules stored here also then currentMod changes when button click
    currentModule: {},
    allModules: [],
    selectedProject: {},
    myStudents: [],
    currentStudent: {},
    form: {}
  },
  mutations: {
    // mutations update state
    // appendNote to project in module
    // payload is all modules??
    setCurrentModule (state, payload) {
      state.currentModule = payload
    },
    setAllModules (state, singleModule) {
      state.allModules.push(singleModule)
    },
    setMyStudents (state, myStudents) {
      state.myStudents = myStudents
    },
    setCurrentStudent (state, foundStudent) {
      state.currentStudent = foundStudent
    },
    setForm (state, formData) {
      state.form = formData
    }
    // setNotes (state, notes) {
    //   state.selectedProject.studentNotes.unshift(notes)
    // }
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
    // fetchModule (context, module) {
    // do api call for all modules
    // this is only getting one module, so it will need to be fixed for all modules ???
    // return fetch(`https://shrouded-citadel-55795.herokuapp.com/api/v1/students/1/student_projects?mod=${module}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     context.commit('setCurrentModule', data)
    //     console.log('all data FROM STORE: ', data)
    //   })
    fetchModule (context, studentData) {
      return fetch(`https://shrouded-citadel-55795.herokuapp.com/api/v1/students/${studentData.studentId}/student_projects?mod=${studentData.studentMod}`)
        .then(response => response.json())
        .then(data => {
          context.commit('setAllModules', data)
        })
    },
    addNoteToProject (context, note) {
      return fetch('https://shrouded-citadel-55795.herokuapp.com/api/v1/students/94/student_projects/1', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ student_comments: note })
      })
        .then(response => response.json)
        .then(data => {
          console.log(data)
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
    },
    getForm (context, fetchDetails) {
      // console.log(fetchDetails)
      return fetch(`https://shrouded-citadel-55795.herokuapp.com/api/v1/instructors/${fetchDetails.instructorId}/students/${fetchDetails.studentId}/project_templates?mod=${fetchDetails.modNum}&project_number=${fetchDetails.projectNum}`)
        .then(response => response.json())
        .then(data => {
          // console.log(data)
          context.commit('setForm', data)
        })
    },
    clearForm (context, projectNum) {
      if (this.state.form.data.attributes.mod !== projectNum) {
        context.commit('setForm', {})
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
