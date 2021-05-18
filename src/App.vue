<template>
  <div id="app">
    <Header />
    <Home />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Home from '@/views/Home'
import Footer from '@/components/Footer'

export default {
  components: {
    Footer,
    Home,
    Header
  }
}
</script>
