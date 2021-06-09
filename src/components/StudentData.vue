<template>
  <div class="student-data">
    <span class="s-h3">{{ currentStudent.attributes.first_name + " " + currentStudent.attributes.last_name}}</span>
    <span class="s-text-body">Preferred Name: {{ currentStudent.attributes.first_name }}</span>
    <span class="s-text-body">Pronouns: {{ pronouns() }}</span>
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
  },
  methods: {
    pronouns () {
      if (this.currentStudent.attributes.user_id === 48 || this.currentStudent.attributes.user_id === 52 || this.currentStudent.attributes.user_id === 50) {
        return 'she/her'
      } else if (this.currentStudent.attributes.user_id === 46 || this.currentStudent.attributes.user_id === 44 || this.currentStudent.attributes.user_id === 40) {
        return 'he/him'
      } else {
        return 'they/them'
      }
    }
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
