<template>
  <section v-if="loggedIn" class="left-section">
    <router-link class="module" :to="{
         name: 'StudentFeedback',
         params: { id: 1 }
       }">
      <button data-cy="mod1" class="module-btn">Module 1</button>
    </router-link>

    <router-link class="module" :to="{
         name: 'StudentFeedback',
         params: { id: 2 }
       }">
      <button data-cy="mod2" class="module-btn">Module 2</button>
    </router-link>

    <router-link class="module" :to="{
         name: 'StudentFeedback',
         params: { id: 3 }
       }">
      <button data-cy="mod3" class="module-btn">Module 3</button>
    </router-link>

    <router-link class="module" :to="{
         name: 'StudentFeedback',
         params: { id: 4 }
       }">
      <button data-cy="mod4" class="module-btn">Module 4</button>
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
