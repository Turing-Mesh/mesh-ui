import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentModule: '',
    allModules: [],
    selectedProject: {},
    myStudents: [],
    currentStudent: {},
    form: {},
    confirmation: '',
    currentProject: {},
    loggedIn: true,
    authenticated: true,
    instructorAuth: false,
    user: {
      userId: 94,
      userName: 'Lesha',
      lastName: 'Hilpert',
      currentModNum: 1,
      currentProjNum: 4,
      currentCohort: '2105',
      program: 'BE'
    }
    // user: {
    //   userId: 84,
    //   userName: 'Mark',
    //   lastName: 'Weissnat',
    //   pronouns: 'he/him',
    //   currentModNum: 3,
    //   currentProjNum: 4,
    //   currentCohort: '2102',
    //   program: 'BE'
    // }
    // user: {
    //   userId: 97,
    //   userName: 'Gene',
    //   lastName: 'Kutch',
    //   pronouns: 'he/him',
    //   currentModNum: 1,
    //   currentProjectNum: 4,
    //   currentCohort: '2105',
    //   program: 'BE'
    // }
    // user: {
    //   userId: 1,
    //   userName: 'Olive',
    //   lastName: 'Renner',
    //   currentModNum: 4,
    //   currentProjNum: 2,
    //   currentCohort: '2011',
    //   program: 'FE'
    // }
    // user: {
    //   userId: 112,
    //   userName: 'Daniele',
    //   lastName: 'Littel',
    //   pronouns: 'they/them',
    //   currentModNum: 3,
    //   currentProjNum: null,
    //   currentCohort: null,
    //   program: 'BE'
    // }
  },
  mutations: {
    setCurrentModule (state, payload) {
      state.currentModule = payload
    },
    setAllModules (state, singleModule) {
      if (singleModule === []) {
        state.allModules = singleModule
      } else if (state.allModules.length === 4) {
        state.allModules = []
        state.allModules.push(singleModule)
      } else {
        state.allModules.push(singleModule)
      }
    },
    setMyStudents (state, myStudents) {
      state.myStudents = myStudents
    },
    setCurrentStudent (state, foundStudent) {
      state.currentStudent = foundStudent
    },
    setForm (state, formData) {
      console.log(formData)
      state.form = formData
      console.log(state.form)
    },
    setCurrentProject (state, payload) {
      state.currentProject = payload
    },
    setCurrentUser (state, payload) {
      state.userId = payload.userId
      state.userName = payload.userName
      state.instructorAuth = payload.instructorAuth
    },
    updateProject (state, payload) {
      const foundModule = state.allModules.find(module => Number(module.data.attributes.mod) === state.currentModule)
      const foundIndex = state.allModules.indexOf(foundModule)
      state.allModules[foundIndex].data.attributes.student_projects.push(payload.data.attributes.student_projects[0])
    },
    setConfirmation (state, payload) {
      state.confirmation = payload
    }
  },
  actions: {
    fetchModule (context, studentData) {
      return fetch(`https://shrouded-citadel-55795.herokuapp.com/api/v1/students/${studentData.studentId}/student_projects?mod=${studentData.studentMod}`)
        .then(response => response.json())
        .then(data => {
          context.commit('setAllModules', data)
        })
    },
    clearAllModules (context, payload) {
      context.commit('setAllModules', payload)
    },
    addNotesToProject (context, { userId, projectId, notes }) {
      return fetch(`https://shrouded-citadel-55795.herokuapp.com/api/v1/students/${userId}/student_projects/${projectId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ student_comments: notes })
      })
        .then(response => response.json)
        .then(data => {
          context.commit('setCurrentProject', data)
        })
    },
    fetchMyStudents (context, module) {
      return fetch(`https://shrouded-citadel-55795.herokuapp.com/api/v1/instructors/112/students?mod=${module}`)
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
    clearSelected (context, payload) {
      context.commit('setCurrentProject', {})
      context.commit('setCurrentModule', {})
    },
    getForm (context, fetchDetails) {
      return fetch(`https://shrouded-citadel-55795.herokuapp.com/api/v1/instructors/${fetchDetails.instructorId}/students/${fetchDetails.studentId}/project_templates?mod=${fetchDetails.modNum}&project_number=${fetchDetails.projectNum}`)
        .then(response => response.json())
        .then(data => {
          context.commit('setForm', data)
        })
    },
    clearForm (context, projectNum) {
      if (this.state.form.data.attributes.mod && this.state.form.data.attributes.mod !== projectNum) {
        context.commit('setForm', {})
      }
    },
    sendFeedback (context, feedback) {
      context.commit('setForm', {})
      context.commit('setConfirmation', 'Submitted!')
      return fetch(`https://shrouded-citadel-55795.herokuapp.com/api/v1/instructors/${this.state.user.userId}/students/${this.state.currentStudent.attributes.user_id}/student_projects`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedback)
      })
        .then(response => response.json())
        .then(data => {
          context.commit('updateProject', data)
        })
    },
    setLoggedInUser (context, payload) {
      return context.commit('setCurrentUser', payload)
    },
    sendModule (context, payload) {
      context.commit('setCurrentModule', payload)
    },
    clearConfirmation (context, payload) {
      context.commit('setConfirmation', payload)
    }
  },
  getters: {
    getSelectedProject: (state) => (selectedModuleNum, selectedProjectNum) => {
      const foundModule = state.allModules.find(dataSet => Number(dataSet.data.attributes.mod) === selectedModuleNum)
      if (foundModule && foundModule.data.attributes.student_projects) {
        return foundModule.data.attributes.student_projects.find(dataSet => Number(dataSet.project_number) === selectedProjectNum)
      } else {
        return undefined
      }
    }
  }
})
