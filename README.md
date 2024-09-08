# graphql-practice

A simple GraphQL server implementation using Node.js, Express, and Apollo Server.

## Setup
1. Install dependencies: `npm install`
2. Start the server: `npm start`
3. Open GraphQL Playground: http://localhost:4000/graphql

## Schema

```
graphql
    type Query {
    me: User
}

type User {
    id: ID
name: String
}
```

Query
```
graphql
{
    me {
    name
    }
}
```

