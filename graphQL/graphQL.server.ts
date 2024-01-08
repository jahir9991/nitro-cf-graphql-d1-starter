import { makeExecutableSchema } from "@graphql-tools/schema";
import { userResolver } from "./resolvers/user.resolver";
import { userTypeDefinitions } from "./typeDefs/user.typeDef";
import { postTypeDefination } from "./typeDefs/post.typeDef";
import { createYoga } from "graphql-yoga";
import { globalTypeDefination } from "./typeDefs/global.typeDef";

export const GraphQLServer = (context) => {
  return createYoga({
    schema: makeExecutableSchema({
      resolvers: [userResolver],
      typeDefs: [globalTypeDefination, userTypeDefinitions],
    }),
    context,
    graphqlEndpoint: "/graphql",
    landingPage: false,
    multipart: true,
    cors: true,
    logging: "debug",
  }).handle(context.node.req, context.node.res);
};
