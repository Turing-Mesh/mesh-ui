<template>
  <div class="about">
    <h1 class="s-h1">
      <span>{{ instructorAuth ? 'Instructor ' : 'Student ' }}</span>
      Profile
    </h1>
    <h2 class="s-h2">Name: <span class="user-data">{{ user.userName }} {{ user.lastName }}</span></h2>
    <h2 class="s-h2">Id: <span class="user-data">{{ user.userId }}</span></h2>
    <h2 class="s-h2">Current Cohort/Program: <span class="user-data">{{ user.currentCohort }} {{ user.program }}</span></h2>
    <h2 class="s-h2">Current Module: <span class="user-data">{{ user.currentModNum }}</span></h2>
    <h2 class="s-h2" v-if="user.currentProjNum">Current Project: <span class="user-data">{{ user.currentProjNum }}</span></h2>
    <br>
    <!--    <h3 class="date" v-if="!instructorAuth">You received feedback for Mod1/Project3 on June 1, 2021</h3>-->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'loggedIn',
      'authenticated',
      'instructorAuth',
      'user'
    ])
  }
}
</script>
