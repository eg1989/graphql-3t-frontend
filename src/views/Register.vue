<template>
    <div class="auth">
        <v-container>
            <v-row>
                <v-col>
                    <h3>Sign In</h3>
                </v-col>
                <v-col> </v-col>
            </v-row>
            <v-row> </v-row>
            <form action="POST" @submit.prevent="registerUser">
                <v-text-field
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    v-model="authDetails.name"
                />
                <v-text-field
                    id="email"
                    type="email"
                    name="email"
                    placeholder="E-Mail"
                    v-model="authDetails.email"
                />
                <v-text-field
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    v-model="authDetails.password"
                />
                <v-btn type="submit" class="auth-submit primary">submit</v-btn>

                <p class="auth-text">
                    Already have an account?
                    <router-link to="/login"> Login </router-link>
                </p>
            </form>
        </v-container>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'
    export default {
        name: 'Register',
        data() {
            return {
                authDetails: {
                    name: '',
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            ...mapActions(['register']),
            registerUser: function () {
                this.register(this.authDetails)
                    .then(() => this.$router.push('/dashboard'))
            }
        }
    }
</script>
<style>
</style>