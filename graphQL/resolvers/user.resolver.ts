import { GraphQLError, GraphQLResolveInfo } from "graphql";

export const userResolver = {
  Query: {
    users: () => {
      return 'hello from nitro';
    },
  },
};
