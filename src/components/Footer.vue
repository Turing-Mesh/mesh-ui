<template>
  <footer id="footer">
    <button @click="updateUser(94, 'Lesha', false)"
            class="s-button s-button-secondary"
            data-id="be2105">
      BE 2105 Student
    </button>

    <button @click="updateUser(1, 'Olive', false)"
            class="s-button s-button-secondary"
            data-id="fe2011">
      FE 2011 Student
    </button>

    <button @click="updateUser(112, 'Daniele', true)"
            class="s-button s-button-secondary"
            data-id="mod1-instr">
      Mod 1 Instructor
    </button>
<!--    Built by Ben 🔰, Genevieve 🌓, Jessica 🦑, Jesus 🦂, Katie 🐢, and Nikki 👖.-->
  </footer>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Footer.vue',
  computed: {
    ...mapState([
      'loggedIn',
      'authenticated',
      'instructorAuth',
      'userId',
      'userName'
    ])
  },
  methods: {
    ...mapActions([
      'fetchModule'
    ]),
    updateUser (userId, userName, instructorAuth) {
      this.$store.dispatch('setLoggedInUser', {
        userId,
        userName,
        instructorAuth
      })
      let payload
      for (let i = 1; i < 5; i++) {
        payload = { studentMod: i, studentId: userId }
        // payload = { studentMod: i, studentId: 94 }
        this.fetchModule(payload)
      }
    }
  }
}
</script>
