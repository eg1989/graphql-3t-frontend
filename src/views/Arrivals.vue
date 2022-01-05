<template>
  <v-container>
    <h1>Arrivals</h1>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            Flight ID
          </th>
          <th class="text-left">
            Start
          </th>
          <th class="text-left">
            Destination
          </th>
          <th class="text-left">
            Arrival
          </th>
          <th class="text-left">
            State
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="flight in board"
            :key="flight.id"
        >
          <td>{{ flight.id }}</td>
          <td>{{ flight.start }}</td>
          <td>{{ flight.destination }}</td>
          <td>{{ flight.arrival }}</td>
          <td>{{ flight.status }}</td>
          <!-- <td></td> TODO: Some kind of flashing for subscription messages  -->
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: "Arrivals",
  data() {
    return{
      board: [
        {
          id: "RT2201",
          start: "Paris",
          destination: "Berlin",
          arrival: "16:55",
          departure: "",
          status: "LANDED"
        },
        {
          id: "OF1255",
          start: "Hamburg",
          destination: "Berlin",
          arrival: "17:34",
          departure: "",
          status: "ARRIVING"
        },
        {
          id: "KF2830",
          start: "Brüssel",
          destination: "Berlin",
          arrival: "",
          departure: "17:52",
          status: "ARRIVING"
        },
        {
          id: "QV627",
          start: "Rom",
          destination: "Berlin",
          arrival: "18:16",
          departure: "",
          status: "IN_TIME"
        },
        {
          id: "KP4920",
          start: "Berlin",
          destination: "Rom",
          arrival: "19:27",
          departure: "",
          status: "DELAVED"
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>