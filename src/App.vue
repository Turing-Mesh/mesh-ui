<template>
  <div id="app">
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
  </div>
</template>

<script>
import Header from '@/components/Header'
import ModuleNav from '@/components/ModuleNav'
import Footer from '@/components/Footer'

export default {
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
  }
}
</script>
