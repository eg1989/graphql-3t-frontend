<template>
  <v-container>
    <h1>{{ arrivals.title }}</h1>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Flight ID</th>
            <th class="text-left">Start</th>
            <th class="text-left">Destination</th>
            <th class="text-left">Arrival</th>
            <th class="text-left">State</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="flight in arrivals.flights" :key="flight.id">
            <td>{{ flight.id }}</td>
            <td>{{ flight.start }}</td>
            <td>{{ flight.destination }}</td>
            <td>{{ flight.arrival }}</td>
            <td>{{ flight.status }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Arrivals",
  data() {
    return {
      arrivals: [],
    };
  },
  apollo: {
    arrivals: {
      query: gql`
        query {
          arrivals: currentBoard(type: ARRIVALS) {
            type
            title
            flights(states: [LANDED, DELAYED, IN_TIME, ARRIVING]) {
              id
              start
              destination
              arrival
              status
            }
          }
        }
      `,
      subscribeToMore: {
        document: gql`
          subscription {
            flightChanged(states: [LANDED, DELAYED, IN_TIME, ARRIVING]) {
              id
              start
              destination
              arrival
              status
            }
          }
        `,
        updateQuery: (previousResult, { subscriptionData }) => {
          const previousArrivals = previousResult.arrivals;
          const newOrChangedFlight = subscriptionData.data.flightChanged;

          const index = previousArrivals.flights.findIndex(
            (f) => f.id === newOrChangedFlight.id
          );

          if (index === -1) {
            previousArrivals.flights.push(newOrChangedFlight);
          } else {
            Object.assign(previousArrivals.flights[index], newOrChangedFlight);
          }

          return previousArrivals;
        },
      },
    },
  },
};
</script>

<style scoped></style>
