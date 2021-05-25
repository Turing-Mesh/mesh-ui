<template>
    <div class="main">
      <ModuleNav :loggedIn="loggedIn"/>
      <section class="left-section">
        <p>These will need to be formatted and used in a v-for directive, but I put them here to show you that the data is hooked up from BE and stored in Vuex!</p>
        <button class="s-button" @click="getInfo">{{ this.$store.state.myStudents.data[0].attributes.first_name }}</button>
        <button class="s-button">{{ this.$store.state.myStudents.data[1].attributes.first_name }}</button>
        <button class="s-button">{{ this.$store.state.myStudents.data[2].attributes.first_name }}</button>
        <button class="s-button">{{ this.$store.state.myStudents.data[3].attributes.first_name }}</button>
      </section>

      <section v-if="this.$store.state.currentStudent.id" class="right-section">
        <p>{{ this.$store.state.currentStudent.attributes.first_name + " " + this.$store.state.currentStudent.attributes.last_name}}</p>
        <p>Student ID: {{ this.$store.state.currentStudent.attributes.user_id }}</p>
        <p>Cohort {{ this.$store.state.currentStudent.attributes.current_cohort }}</p>
        <StudentFeedback />
      </section>

      <section v-else-if="!this.$store.state.currentStudent.user_id" class="right-section">
        <router-view
          :key="$route.path"
          :loggedIn="loggedIn"
          :authenticated="authenticated"
        />
      </section>
    </div>
</template>

<script>
import ModuleNav from '@/components/ModuleNav'
import StudentFeedback from '@/components/StudentFeedback'

export default {
  // set initial state here
  // save in state in store
  data () {
    return {
      loggedIn: true,
      authenticated: true
    }
  },
  components: {
    ModuleNav,
    StudentFeedback
  },
  methods: {
    getInfo () {
      this.$store.dispatch('setStudentData', '1')
    }
  },
  created () {
    this.$store.dispatch('fetchMyStudents', 1)
  },
  updated () {
    this.$store.dispatch('fetchModule', { studentMod: 1, studentId: this.$store.state.currentStudent.attributes.user_id })
    this.$store.dispatch('fetchModule', { studentMod: 2, studentId: this.$store.state.currentStudent.attributes.user_id })
    this.$store.dispatch('fetchModule', { studentMod: 3, studentId: this.$store.state.currentStudent.attributes.user_id })
    this.$store.dispatch('fetchModule', { studentMod: 4, studentId: this.$store.state.currentStudent.attributes.user_id })
  }
}
</script>
