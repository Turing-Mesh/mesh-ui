<template>
  <div id="app">
    <Header />
    <Home />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Home from '@/views/Home'

export default {
  components: {
    Home,
    Header
  }
}
</script>
