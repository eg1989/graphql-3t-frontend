import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { split } from 'apollo-link'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

const httpLink = new HttpLink({
    uri: 'http://localhost:3020/graphql'
  })
  
  const webSocketLink = new WebSocketLink({
    uri: 'ws://localhost:3020/subscriptions',
    options: {
      reconnect: true
    }
  })
  
  const link = split(
    ({query}) => {
      const definition = getMainDefinition(query)
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
    },
    webSocketLink,
    httpLink
  )
  
  const apolloClient = new ApolloClient({
    link,
    cache: new InMemoryCache(),
    connectToDevTools: true
  })

  export default({
      apolloClient
  })
