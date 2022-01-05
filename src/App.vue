<template>
  <v-app>
    <v-main>
      <v-container>
        <router-link to="/">Home</router-link> |
        <router-link to="/arrivals">Arrivals</router-link> |
        <router-link to="/departures">Departures</router-link>
      </v-container>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style scoped>

</style>
