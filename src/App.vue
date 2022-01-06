<template>
    <div>
        <v-app-bar color="deep-purple accent-4" dense dark>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Page title</v-toolbar-title>
<!--            <v-spacer></v-spacer>-->
<!--            <router-link to="/">Home</router-link> |-->
<!--            <router-link to="/arrivals">Arrivals</router-link> |-->
<!--            <router-link to="/departures">Departures</router-link>-->
            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-face-man</v-icon>
            </v-btn>

            <v-btn icon to="/login">
                <v-icon>mdi-lock-open</v-icon>
            </v-btn>
        </v-app-bar>
        <v-app>
            <v-main>
                <router-view />
            </v-main>
        </v-app>
    </div>
    <!-- <v-app>
       
    </v-app> -->
    <!-- <v-app>
        <header class="header">
            <div class="app-name">Blogr</div>
            <div v-if="authStatus" id="nav">
                <v-container>
                <router-link to="/arrivals">Arrivals</router-link> |
                <router-link to="/departures">Departures</router-link>
            </v-container>
                <div>{{ user.name }}</div>                
                <button class="auth-button" @click="logOut">Log Out</button>
            </div>
        </header>

        <v-main>
            <router-view />
        </v-main>

        <v-main>
            <v-container>
                <router-link to="/">Home</router-link> |
                <router-link to="/arrivals">Arrivals</router-link> |
                <router-link to="/departures">Departures</router-link>
            </v-container>
            <router-view />
        </v-main>
    </v-app> -->
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'App',

        data: () => ({
            appTitle: 'Awesome App',
            sidebar: false,
            menuItems: [
                { title: 'Home', path: '/home', icon: 'home' },
                { title: 'Sign Up', path: '/signup', icon: 'face' },
                { title: 'Sign In', path: '/login', icon: 'lock_open' }
            ]
        }),
        methods: {
            logOut: function () {
                this.$store.dispatch('logOut')
                    .then(() => this.$router.push('/login'))
            }
        },
        computed: {
            ...mapGetters(['authStatus', 'user'])
        }
    };
</script>

<style>
</style>
