<template>
  <div class="student-data">
    <span>{{ currentStudent.attributes.first_name + " " + currentStudent.attributes.last_name}}</span>
    <span>Student ID: {{ currentStudent.attributes.user_id }}</span>
    <span>Cohort {{ currentStudent.attributes.current_cohort }}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'StudentData',
  computed: {
    ...mapState([
      'currentStudent'
    ])
  }
}
</script>

<style scoped>
.student-data {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 5px solid #12F1FCFF;
  margin-top: 40px;
}
</style>
