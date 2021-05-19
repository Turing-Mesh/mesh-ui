<template>
  <div id="app">
    <Header />
    <ModuleNav />
    <router-view  :key="$route.path" :moduleId="$route.path"/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import ModuleNav from '@/components/ModuleNav'
import Footer from '@/components/Footer'

export default {
  components: {
    Footer,
    Header,
    ModuleNav
  }
}
</script>
