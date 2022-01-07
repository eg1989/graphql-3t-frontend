<template>
  <v-container>
    <h1>{{ departures.title }}</h1>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Flight ID</th>
            <th class="text-left">Start</th>
            <th class="text-left">Destination</th>
            <th class="text-left">Departure</th>
            <th class="text-left">State</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="flight in departures.flights" :key="flight.id">
            <td>{{ flight.id }}</td>
            <td>{{ flight.start }}</td>
            <td>{{ flight.destination }}</td>
            <td>{{ flight.departure }}</td>
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
  name: "Departures",
  data() {
    return {
      departures: [],
    };
  },
  apollo: {
    departures: {
      query: gql`
        query {
          departures: currentBoard(type: DEPARTURES) {
            type
            title
            flights(states: [READY_FOR_TAKE_OFF, BOARDING, CANCELLED]) {
              id
              start
              destination
              departure
              status
            }
          }
        }
      `,
      subscribeToMore: {
        document: gql`
          subscription {
            flightChanged(states: [READY_FOR_TAKE_OFF, BOARDING, CANCELLED]) {
              id
              start
              destination
              departure
              status
            }
          }
        `,
        updateQuery: (previousResult, { subscriptionData }) => {
          const previousDepartures = previousResult.departures;
          const newOrChangedFlight = subscriptionData.data.flightChanged;

          const index = previousDepartures.flights.findIndex(
            (f) => f.id === newOrChangedFlight.id
          );

          if (index === -1) {
            previousDepartures.flights.push(newOrChangedFlight);
          } else {
            Object.assign(
              previousDepartures.flights[index],
              newOrChangedFlight
            );
          }

          return previousDepartures;
        },
      },
    },
  },
};
</script>

<style scoped></style>
