<template>
  <div id="app">
    <Header :loggedIn="loggedIn" :userName="instructorAuth ? instructorNameHardCoded : studentNameHardCoded"/>

    <InstructorDashboard v-if="instructorAuth"
                :loggedIn="loggedIn"
                :authenticated="authenticated"
                :instructorAuth="instructorAuth"
    />

    <div v-else class="main">
      <ModuleNav :loggedIn="loggedIn"/>

      <section class="right-section">
        <router-view
          :key="$route.path"
          :loggedIn="loggedIn"
          :authenticated="authenticated"
        />
      </section>
    </div>
<!--    <Footer />-->
  </div>
</template>

<script>
import Header from '@/components/Header'
import ModuleNav from '@/components/ModuleNav'
// import Footer from '@/components/Footer'
import { mapActions, mapState } from 'vuex'
import InstructorDashboard from '@/views/InstructorDashboard'

export default {
  // set initial state here
  // save in state in store
  data () {
    return {
      instructorNameHardCoded: 'Leta',
      studentNameHardCoded: 'Jessica'
    }
  },
  components: {
    // Footer,
    ModuleNav,
    Header,
    InstructorDashboard
  },
  computed: {
    ...mapState([
      'loggedIn',
      'authenticated',
      'instructorAuth'
    ])
  },
  methods: {
    ...mapActions([
      'fetchModule'
    ])
  },
  created () {
    let payload
    for (let i = 1; i < 5; i++) {
      payload = { moduleId: i, studentId: this.studentIdHardCoded }
      this.fetchModule(payload)
      this.$store.dispatch('fetchModule', payload)
    }
    // this.$store.dispatch('fetchModule', 1)
    // this.$store.dispatch('fetchModule', 2)
    // this.$store.dispatch('fetchModule', 3)
    // this.$store.dispatch('fetchModule', 4)
  }
}
</script>
