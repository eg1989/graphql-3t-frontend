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
            v-for="flight in departures.flights"
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
import gql from "graphql-tag";

export default {
  name: "Departures",
  data() {
    return {
      departures: []
    }
  },
  apollo: {
    departures: gql`
      query {
        departures: currentBoard(type: DEPARTURES) {
          type
          title
          flights {
            id
            start
            destination
            arrival
            status
          },
        }
      }
    `,
    // subscribeToMore: {
    //   document: gql`
    //     subscription status($param: FlightStatus!) {
    //       flightStatusChanged(param: $param) {
    //         id
    //         start
    //         destination
    //         arrival
    //         departure
    //         status
    //       }
    //     }
    //   `,
    //   variables() {
    //     return {
    //       param: this.param,
    //     };
    //   },
    //   updateQuery: (previousResult, { subscriptionData }) => {
    //     return subscriptionData.data.flightStatusChanged;
    //   },
    // },
  }
}
</script>

<style scoped>

</style>
