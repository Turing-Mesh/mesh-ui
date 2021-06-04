<template>
    <div class="instructor-container">
      <div class="main">
        <section class="left-section">
          <div class="instructor-main">
            <button @click="showSearch = !showSearch" class="s-button search-students-btn">Search All Students</button>
              <div class="search-input" v-if="showSearch">
                <input placeholder="Student name">
              </div>

            <button  @click="showStudents = !showStudents" class="s-button current-students-btn">Current Students</button>
              <ul v-if="showStudents" class="student-name-container">
                <li class="student-name" v-for="student in myStudents.data" :key="student.id">
                  <button
                    class="s-button s-button-secondary stu-btn"
                    @click="getInfo(student.id)">{{ student.attributes.first_name }}
                  </button>
                </li>
              </ul>
          </div>
        </section>

        <section v-if="this.$store.state.currentStudent.id" class="right-section">
          <StudentData />
          <ModuleNav :loggedIn="loggedIn" :class="{ 'instructor-left-section': instructorAuth }"/>
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
      showSearch: false,
      showStudents: false,
      isActive: false
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
      'currentStudent',
      'allModules'
    ])
  },
  methods: {
    ...mapActions([
      'fetchModule'
    ]),
    getInfo (id) {
      this.$store.dispatch('clearSelected', {})
      this.$store.dispatch('setStudentData', id)
    }
  },
  created () {
    this.$store.dispatch('fetchMyStudents', 1)
  },
  updated () {
    if (this.$route.params.id) {
      this.$store.dispatch('fetchModule', { studentId: this.currentStudent.attributes.user_id, studentMod: this.$route.params.id })
    }
  }
}
</script>
