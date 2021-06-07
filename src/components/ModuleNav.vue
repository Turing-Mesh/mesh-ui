<template>
  <section v-if="loggedIn" class="left-section">
    <router-link :to="{
         name: 'StudentFeedback',
         params: { id: 1, project_id: 1 }
       }">
      <button data-cy="mod1" class="s-button">Module 1</button>
    </router-link>

    <router-link :to="{
         name: 'StudentFeedback',
         params: { id: 2, project_id: 1 }
       }">
      <button data-cy="mod2" class="s-button">Module 2</button>
    </router-link>

    <router-link :to="{
         name: 'StudentFeedback',
         params: { id: 3, project_id: 1 }
       }">
      <button data-cy="mod3" class="s-button">Module 3</button>
    </router-link>

    <router-link :to="{
         name: 'StudentFeedback',
         params: { id: 4, project_id: 1 }
       }">
      <button data-cy="mod4" class="s-button">Module 4</button>
    </router-link>
  </section>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    loggedIn: Boolean
  }
}
</script>
