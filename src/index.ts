import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import { Query } from "./resolvers/index";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
      Query,
  }
});

server.listen().then(({ url }) => {
  console.log(`Server ready on ${url}`);
});