<template>
  <div class="signup">
    <h3 class="s-h3">Sign up for Mesh</h3>
    <div class="signup-container">
      <form @submit.prevent="signUp">
        <div class="field">
          <label class="label" for="name">Name</label>
          <div class="control has-icons-left has-icons-right">
            <input id="name" v-model="name" class="input" type="text" placeholder="First and Last" >
<!--            <span class="icon is-small is-left">-->
<!--              <i class="fas fa-user"></i>-->
<!--            </span>-->
          </div>
        </div>

        <div class="field">
          <label class="label" for="email">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input id="email" v-model="email" class="input" type="text" placeholder="What is your email?" >
<!--            <span class="icon is-small is-left">-->
<!--              <i class="fas fa-envelope"></i>-->
<!--            </span>-->
          </div>
        </div>

        <div class="field">
          <label for="password" class="label">Password</label>
          <div class="control has-icons-left has-icons-right">
            <input id="password" v-model="password" class="input" type="password" placeholder="Password" >
<!--            <span class="icon is-small is-left">-->
<!--              <i class="fas fa-unlock-alt"></i>-->
<!--            </span>-->
          </div>
        </div>

        <div class="field">
          <div class="buttons form-container__item--buttons">
            <button class="s-button-primary-inverse cancel" type="reset">Cancel</button>
            <button class="s-button-primary submit">Submit</button>
          </div>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data () {
    return {
      name: null,
      email: null,
      password: null
    }
  },
  props: {
    loggedIn: Boolean
  },
  methods: {
    signUp () {
      // do a fetch POST request
      // re-route to home??
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
