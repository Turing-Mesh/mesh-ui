<template>
  <div class="instructor-container">
    <h1>Instructor View</h1>
    <div class="main">
      <ModuleNav :loggedIn="loggedIn" :style="instructorAuth"/>

<!--      <section class="right-section">-->
<!--        <router-view-->
<!--          :key="$route.path"-->
<!--          :loggedIn="loggedIn"-->
<!--          :authenticated="authenticated"-->
<!--        />-->
<!--      </section>-->
    </div>
  </div>
</template>

<script>
import ModuleNav from '@/components/ModuleNav'

export default {
  name: 'Instructor',
  props: {
    loggedIn: Boolean,
    authenticated: Boolean,
    instructorAuth: Boolean
  },
  components: {
    ModuleNav
  }
}
</script>

<style scoped>
.left-section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 25%;
  /*height: 40%;*/
  margin: 30px auto;
  text-align: center;
}

</style>
