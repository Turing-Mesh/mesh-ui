<template>
  <div id="app">
    <Header :loggedIn="loggedIn" :userName="userName"/>

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
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import ModuleNav from '@/components/ModuleNav'
import Footer from '@/components/Footer'
import { mapActions, mapState } from 'vuex'
import InstructorDashboard from '@/views/InstructorDashboard'

export default {
  // set initial state here
  // save in state in store
  data () {
    return {
      // instructorNameHardCoded: 'Leta',
      // studentNameHardCoded: 'Jessica'
    }
  },
  components: {
    Footer,
    ModuleNav,
    Header,
    InstructorDashboard
  },
  computed: {
    ...mapState([
      'loggedIn',
      'authenticated',
      'instructorAuth',
      'userId',
      'userName'
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
      payload = { studentMod: i, studentId: this.userId }
      // payload = { studentMod: i, studentId: 94 }
      this.fetchModule(payload)
    }
  }
}
</script>
