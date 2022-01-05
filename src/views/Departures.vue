<template>
  <v-container>
    <h1>Departures</h1>
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
            Departure
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
          <td>{{ flight.departure }}</td>
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
  name: "Departures",
  data() {
    return {
      board: [
        {
          id: "FL2507",
          start: "Berlin",
          destination: "Madeira",
          arrival: "",
          departure: "17:10",
          status: "READY_FOR_TAKE_OFF"
        },
        {
          id: "ZT1958",
          start: "Berlin",
          destination: "München",
          arrival: "",
          departure: "17:25",
          status: "BOARDING"
        },
        {
          id: "AC703",
          start: "Berlin",
          destination: "Düsseldorf",
          arrival: "",
          departure: "17:35",
          status: "BOARDING"
        },
        {
          id: "TG8349",
          start: "Berlin",
          destination: "Stockholm",
          arrival: "",
          departure: "17:47",
          status: "IN_TIME"
        },
        {
          id: "KP4920",
          start: "Berlin",
          destination: "Rom",
          arrival: "",
          departure: "18:21",
          status: "DELAYED"
        },
        {
          id: "AC703",
          start: "Berlin",
          destination: "Athen",
          arrival: "",
          departure: "18:36",
          status: "CANCELLED"
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>