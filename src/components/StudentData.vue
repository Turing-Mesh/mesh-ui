<template>
  <div class="student-data">
    <span class="s-h3">{{ currentStudent.attributes.first_name + " " + currentStudent.attributes.last_name}}</span>
    <span class="s-text-body">Preferred Name: {{ currentStudent.attributes.first_name }}</span>
    <span class="s-text-body">Pronouns: {{ currentStudent.attributes.user_id === 29 ? 'she/her' : 'he/him' }}</span>
    <span class="s-text-body">Repeater: No</span>
    <span>Student ID: {{ currentStudent.attributes.user_id }}</span>
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
