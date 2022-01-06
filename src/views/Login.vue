<template>
  <v-container>
<!--    <div class="auth">-->
    <v-row>
      <v-col>
        <h3>Log In</h3>
      </v-col>
    </v-row>

      <form action="POST" @submit.prevent="loginUser">
        <v-text-field
          id="email"
          type="text"
          name="email"
          placeholder="Username/E-Mail"
          v-model="authDetails.email"
        />
        <v-text-field
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          v-model="authDetails.password"
        />
        <v-btn class="auth-submit primary">submit</v-btn>

        <p class="auth-text">
          Don't have an account?
          <router-link to="/"> Register </router-link>
        </p>
      </form>
<!--    </div>-->
  </v-container>
</template>
<script>
    import { mapActions } from 'vuex'
    export default {
        name: 'Login',
        data() {
            return {
                authDetails: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            ...mapActions(['login']),
            loginUser: function () {
                this.login(this.authDetails)
                    .then(() => this.$router.push('/dashboard'))
            }
        }
    }
</script>