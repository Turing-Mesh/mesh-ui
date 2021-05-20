<template>
  <div id="app">
    <Header :loggedIn="loggedIn"/>

    <div class="main">
      <ModuleNav />

      <section class="right-section">
        <router-view :key="$route.path" />
<!--        <router-view />-->
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
      loggedIn: true
    }
  },
  components: {
    Footer,
    ModuleNav,
    Header
  }
}
</script>
