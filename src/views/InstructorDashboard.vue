<template>
    <div class="instructor-container">
      <div class="main">
        <section class="left-section">
          <div class="instructor-main">
            <button class="s-button">Search All Students</button>
            <h2>Current Students</h2>
            <ul class="student-name-container">
              <li class="student-name" v-for="student in myStudents.data" :key="student.id">
                <button class="s-button s-button-secondary stu-btn" @click="getInfo(student.id)">{{ student.attributes.first_name }}</button>
              </li>
            </ul>
          </div>
        </section>

        <section v-if="this.$store.state.currentStudent.id" class="right-section">
          <ModuleNav :loggedIn="loggedIn" :class="{ 'instructor-left-section': instructorAuth }"/>
          <StudentData />
          <InstructorFeedback v-if="$route.params.id"/>
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
import InstructorFeedback from '@/components/InstructorFeedback'
import { mapActions, mapState } from 'vuex'
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
    InstructorFeedback
  },
  computed: {
    ...mapState([
      'loggedIn',
      'authenticated',
      'instructorAuth',
      'myStudents',
      'currentStudent'
    ])
  },
  methods: {
    ...mapActions([
      'fetchModule'
    ]),
    getInfo (id) {
      this.$store.dispatch('setStudentData', id)
    }
  },
  created () {
    this.$store.dispatch('fetchMyStudents', 1)
  },
  updated () {
    if (this.currentStudent.attributes) {
      let payload
      for (let i = 1; i < 5; i++) {
        payload = { studentMod: i, studentId: this.currentStudent.attributes.user_id }
        this.fetchModule(payload)
      }
    }
  }
}
</script>

<style scoped>
/*.instructor-container {*/
/*  width: 90%;*/
/*  margin: 0 auto;*/
/*}*/

/* .instructor-main {*/
/*  width: 100%;*/
/*  height: 95vh;*/
/*} */

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
