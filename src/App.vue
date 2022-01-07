<template>
    <v-app>
        <v-app-bar color="deep-purple accent-4" dense dark app>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>{{ appTitle }}</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-face-man</v-icon>
            </v-btn>

            <v-btn v-if="authStatus" icon @click="logOut()">
                <v-icon>mdi-lock-open</v-icon>
            </v-btn>

            <v-btn v-else icon to="/login">
                <v-icon>mdi-lock</v-icon>
            </v-btn>

            <template v-if="authStatus" v-slot:extension>
                <v-tabs align-with-title>
                    <v-tab
                        v-for="tab in tabItems"
                        :key="tab.text"
                        :to="tab.link"
                    >
                        {{ tab.text }}
                    </v-tab>
                </v-tabs>
            </template>
        </v-app-bar>

        <v-main>
            <v-container fluid>
                <v-row class="fill-height">
                    <v-col>
                        <transition name="fade">
                            <router-view></router-view>
                        </transition>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'App',

        data: () => ({
            appTitle: 'GraphQL - 3T Showcase',
            tab: null,
            tabItems: [
                { link: '/arrivals', text: 'Arrivals' },
                { link: '/departures', text: 'Departures' },
            ],
            sidebar: false,
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
