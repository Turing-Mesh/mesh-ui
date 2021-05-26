<template>
    <div class="instructor-container">
      <div class="main">
        <section class="left-section">
          <div class="instructor-main">
            <ul>
              <li class="student-name" v-for="student in myStudents.data" :key="student.id">
                <button class="s-button s-button-secondary stu-btn" @click="getInfo(student.id)">{{ student.attributes.first_name }}</button>
              </li>
            </ul>
          </div>
        </section>

        <section v-if="this.$store.state.currentStudent.id" class="right-section">
          <ModuleNav :loggedIn="loggedIn" :class="{ 'instructor-left-section': instructorAuth }"/>
          <StudentData :student="student"/>
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
    </div>
</template>

<script>
import ModuleNav from '@/components/ModuleNav'
import StudentFeedback from '@/components/StudentFeedback'
import { mapState } from 'vuex'
import StudentData from '@/components/StudentData'

export default {
  // set initial state here
  // save in state in store
  data () {
    return {
    }
  },
  components: {
    StudentData,
    ModuleNav,
    StudentFeedback
  },
  computed: {
    ...mapState([
      'loggedIn',
      'authenticated',
      'instructorAuth',
      'myStudents'
    ])
  },
  methods: {
    getInfo (id) {
      this.$store.dispatch('setStudentData', id)
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

<style scoped>
/*.instructor-container {*/
/*  width: 90%;*/
/*  margin: 0 auto;*/
/*}*/

/*.instructor-main {*/
/*  width: 100%;*/
/*  height: 95vh;*/
/*}*/

/*.instructor-left-section {*/
/*  !*background: purple;*!*/
/*  display: grid;*/
/*  grid-template-columns: repeat(4, 1fr);*/
/*  width: 100%;*/
/*  height: 60px;*/
/*  margin: 30px auto;*/
/*  text-align: center;*/
/*}*/

.student-name {
  list-style-type: none;
  color: #4C4D4F;
  margin: 10px;
}

</style>
