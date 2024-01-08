import { GraphQLServer } from "../graphQL/graphQL.server";

export default defineEventHandler(async (event: any) => {
  if (getRequestURL(event).pathname.startsWith("/graphql")) {
    return GraphQLServer(event);
  }
});
