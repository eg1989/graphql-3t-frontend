<template>
    <div>
        <p>dsfghjklö</p>
    </div>
</template>

<script>
    import gql from 'graphql-tag'

    export default {
        name: 'Posts',

        components: {
        },
        apollo: {
            // Simple query that will update the 'hello' vue property
            posts: gql`query {
                              {
  currentBoard(type: ARRIVALS) {
    type,
    flights {
      start
      destination
      arrival
    }
  }
}
}`,
        },
    }
</script>

<style>
</style>