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
        apollo: {
            // Simple query that will update the 'hello' vue property
            arrivals: gql`
      query {
        arrivals: currentBoard(type: ARRIVALS) {
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
        },
        name: "Arrivals",
        data() {
            return {
                arrivals: [],
            };
        },
    };
</script>

<style scoped></style>
