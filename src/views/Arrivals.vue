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
            v-for="flight in arrivals"
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
import gql from 'graphql-tag' 


export default {


 apollo: {
    // Simple query that will update the 'hello' vue property
    arrivals: gql`query {
       currentBoard(type: ARRIVALS) {
    type,
    flights {
      id
      start
      destination
      arrival
      status
    }
  }
    }`,
  },


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
  },
  apollo: {
    board: {
      query: gql`query flights {
          currentBoard(type: BoardType!) {
            type
            title
            flights {
              id
                start
                destination
                arrival
                departure
                status
            }
          }
        }`,
        variables: {
          type: 'Arrivals'
        },
        subscribeToMore: {
          document: gql`subscription status($param: FlightStatus!) {
              flightStatusChanged(param: $param) {
                id
                start
                destination
                arrival
                departure
                status
              }
            }`,
            variables () {
              return {
                param: this.param
              }
            },
            updateQuery: (previousResult, { subscriptionData }) => {
                return subscriptionData.data.flightStatusChanged
            }
        }
      }
    }
}
</script>

<style scoped>

</style>
