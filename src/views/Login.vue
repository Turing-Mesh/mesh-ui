<template>
  <div class="login">
    <h2 class="s-h2">Log into Mesh</h2>
    <div class="login-container">
      <form @submit.prevent="login">
        <div class="field">
          <label class="label" for="email">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input id="email" v-model="email" class="input" type="text" >
            <!--            <span class="icon is-small is-left">-->
            <!--              <i class="fas fa-envelope"></i>-->
            <!--            </span>-->
          </div>
        </div>

        <div class="field">
          <label for="password" class="label">Password</label>
          <div class="control has-icons-left has-icons-right">
            <input id="password" v-model="password" class="input" type="password" >
            <!--            <span class="icon is-small is-left">-->
            <!--              <i class="fas fa-unlock-alt"></i>-->
            <!--            </span>-->
          </div>
        </div>

        <div class="field">
          <div class="buttons form-container__item--buttons">
            <button class="s-button s-button-primary-inverse cancel-btn" type="reset">Cancel</button>
            <button class="s-button s-button-primary submit-btn">Submit</button>
          </div>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: null,
      password: null
    }
  },
  props: {
    loggedIn: Boolean
  },
  methods: {
    login () {
      // do a fetch POST request
      // re-route to home??
      // this.loggedIn = true
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
