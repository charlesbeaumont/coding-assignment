import { ApolloServer, gql } from "apollo-server";

import db from "./db";

// TODO: Design architecture in db & graph to keep track of third party tasks and statuses

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      tellMeADadJoke: String
      solutions: [Solution!]
    }

    enum Status {
      Planned
      InProgress
      Done
    }

    type Solution {
      id: String!
      name: String!
      status: Status!
    }
  `,
  resolvers: {
    Query: {
      tellMeADadJoke() {
        return "If you see a robbery at an Apple Store does that make you an iWitness?";
      },
      solutions() {
        return db.solution.getAll();
      }
    }
    // TODO: Write a field resolver to expose the status as defined in the graph
    // TODO: Write a field resolver to expose third party statuses
  }
});

server.listen().then(() => console.log(`Server ready`));
