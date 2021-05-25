<template>
  <div class="instructor-container">
    <h1>Instructor View</h1>
    <ModuleNav :loggedIn="loggedIn" :class="{ 'instructor-left-section': instructorAuth }"/>
    <div class="instructor-main">
      <ul>
        <li class="student-name" v-for="(student, index) in students" :key="index">
          {{ student }}
        </li>
      </ul>
<!--      <section class="">-->
<!--        <h1>is this the main ?</h1>-->
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
  data () {
    return {
      students: ['One Student', 'Two Student', 'Three Student']
    }
  },
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
.instructor-container {
  width: 90%;
  margin: 0 auto;
}

.instructor-main {
  width: 100%;
  height: 95vh;
}

.instructor-left-section {
  /*background: purple;*/
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  height: 60px;
  margin: 30px auto;
  text-align: center;
}

.student-name {
  color: #4C4D4F;
}

</style>
