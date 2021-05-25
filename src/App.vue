<template>
  <InstructorDashboard />
  <!-- <div id="app">
    <Header :loggedIn="loggedIn"/>

    <div class="main">
      <ModuleNav :loggedIn="loggedIn"/>

      <section class="right-section">
        <router-view
          :key="$route.path"
          :loggedIn="loggedIn"
          :authenticated="authenticated"
        />
      </section>
    </div>
    <Footer />
  </div> -->
</template>

<script>
// import Header from '@/components/Header'
// import ModuleNav from '@/components/ModuleNav'
// import Footer from '@/components/Footer'
import { mapActions } from 'vuex'
import InstructorDashboard from '@/views/InstructorDashboard'

export default {
  // set initial state here
  // save in state in store
  data () {
    return {
      loggedIn: true,
      authenticated: true,
      studentIdHardCoded: 94
    }
  },
  components: {
    // Footer,
    // ModuleNav,
    // Header,
    InstructorDashboard
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
      // this.$store.dispatch('fetchModule', payload)
    }
    // this.$store.dispatch('fetchModule', 1)
    // this.$store.dispatch('fetchModule', 2)
    // this.$store.dispatch('fetchModule', 3)
    // this.$store.dispatch('fetchModule', 4)
  }
}
</script>
