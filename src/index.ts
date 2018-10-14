import "reflect-metadata";
import { GraphQLServer } from "graphql-yoga";
import { buildSchema } from "type-graphql";
import MongoDBConnector from "./connectors/MongoDBConnector";

async function bootstrap() {
  await MongoDBConnector.connect();
  const schema = await buildSchema({
    resolvers: [__dirname + "/resolvers/*Resolver.js"]
  });

  const server = new GraphQLServer({ schema});
  server.start(() => console.log(`Server is running at http://localhost:4000`));
}

bootstrap();