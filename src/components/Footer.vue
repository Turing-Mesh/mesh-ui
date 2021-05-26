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
export default {
  name: 'Footer.vue',
  methods: {
    updateUser (userId, userName, instructorAuth) {
      this.$store.dispatch('setLoggedInUser', {
        userId,
        userName,
        instructorAuth
      })
    }
  }
}
</script>
