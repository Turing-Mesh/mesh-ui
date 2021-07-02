<template>
  <div class="about">
    <section class="about-toprow">
      <h2 class="s-h1">{{ user.userName }} {{ user.lastName }}
        <span class="user-data pronouns">({{ user.pronouns }})</span>
      </h2>
      <span class="user-data">{{ user.currentCohort }} {{ user.program }}</span>
    </section>
      Module {{ user.currentModNum }}<span v-if="user.currentProjNum">, Project {{ user.currentProjNum }}</span>
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
