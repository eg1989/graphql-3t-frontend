<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex xs12 class="text-center" mt-5>
                <h1>Welcome to An Another Awesome 3T App</h1>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3 mt-3>
                <blockquote class="blockquote text-center">
                    3T - GraghQL <br />
                    Showcase App <br />

                    Thanks to El Kapture, FLo, Nikkki, Waschbär, Eddi, Brähmar
                </blockquote>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3 class="text-center" mt-5>
                <v-btn class="primary" to="/login">Sign In</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'Landing',
    }
</script>

<style>
</style>