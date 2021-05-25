<template>
  <div>
    <Header :loggedIn="loggedIn"/>

    <div class="main">
      <ModuleNav :loggedIn="loggedIn"/>

      <section class="right-section">
        <router-view
          :key="$route.path"
          :loggedIn="loggedIn"
          :authenticated="authenticated"
        />
        <p>These will need to be formatted and used in a v-for directive, but I put them here to show you that the data is hooked up from BE and stored in Vuex!</p>
        <button >{{ this.$store.state.myStudents.data[0].attributes.first_name }}</button>
        <button >{{ this.$store.state.myStudents.data[1].attributes.first_name }}</button>
        <button >{{ this.$store.state.myStudents.data[2].attributes.first_name }}</button>
        <button >{{ this.$store.state.myStudents.data[3].attributes.first_name }}</button>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import ModuleNav from '@/components/ModuleNav'
import Footer from '@/components/Footer'

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
    Footer,
    ModuleNav,
    Header
  },
  created () {
    this.$store.dispatch('fetchMyStudents', 1)
  }
}
</script>
