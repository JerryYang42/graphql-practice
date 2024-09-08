const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// Define the schema
const typeDefs = gql`
  type Query {
    me: User
  }
  
  type User {
    id: ID
    name: String
  }
`;

// Define the resolvers
const resolvers = {
  Query: {
    me: (_, __, { user }) => user,
  },
  User: {
    name: (user) => user.getName(),
  },
};

// Mock user data
const user = {
  id: '1',
  getName: () => 'Luke Skywalker',
};

// Create an Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ user }),
});

// Create an Express app
const app = express();

// Apply Apollo Server as middleware to Express
server.start().then(() => {
  server.applyMiddleware({ app });

  // Start the server
  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});