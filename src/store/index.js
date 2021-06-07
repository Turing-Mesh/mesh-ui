import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentModule: {},
    allModules: [],
    selectedProject: {},
    myStudents: [],
    currentStudent: {},
    form: {},
    currentProject: {},
    loggedIn: true,
    authenticated: true,
    instructorAuth: true,
    // user: {
    //   userId: 41,
    //   userName: 'Mark',
    //   lastName: 'Weissnat',
    //   pronouns: 'he/him',
    //   currentModNum: 3,
    //   currentProjNum: 4,
    //   currentCohort: '2102',
    //   program: 'BE'
    // }
    user: {
      userId: 112,
      userName: 'Daniele',
      lastName: 'Littel',
      pronouns: 'they/them',
      currentModNum: 3,
      currentProjNum: null,
      currentCohort: null,
      program: 'BE'
    }
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
      state.form = formData
    },
    setCurrentProject (state, payload) {
      state.currentProject = payload
    },
    setCurrentUser (state, payload) {
      state.userId = payload.userId
      state.userName = payload.userName
      state.instructorAuth = payload.instructorAuth
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
      if (this.state.form.data.attributes.mod !== projectNum) {
        context.commit('setForm', {})
      }
    },
    sendFeedback (context, feedback) {
      console.log('form id in state', this.state.form.data.id)
      console.log(this.state.currentStudent.attributes.user_id)
      console.log(feedback)
      return fetch(`https://shrouded-citadel-55795.herokuapp.com/api/v1/instructors/${this.state.user.userId}/students/${this.state.currentStudent.attributes.user_id}/student_projects`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedback)
        // ({
        //   project_template_id: feedback.project_template_id,
        //   instructor_comments: feedback.instructor_comments,
        //   project_feedback: [
        //     {
        //       rubric_template_category_id: feedback,
        //       score: 4.0,
        //       comment: 'yes sire'
        //     },
        //     {
        //       rubric_template_category_id: 4,
        //       score: 2.0,
        //       comment: 'gangsta shit'
        //     },
        //     {
        //       rubric_template_category_id: 5,
        //       score: 1.0,
        //       comment: 'wow'
        //     },
        //     {
        //       rubric_template_category_id: 6,
        //       score: 3.0,
        //       comment: 'holy moly'
        //     }
        //   ]
        // })
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
    },
    setLoggedInUser (context, payload) {
      return context.commit('setCurrentUser', payload)
    }
  },
  modules: {
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
