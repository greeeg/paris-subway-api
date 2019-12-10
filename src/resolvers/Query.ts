import { Context } from '../types';
import { getLines } from '../services/soap';
import { QueryResolvers } from '../types/graphql';

const Query: QueryResolvers = {
  lines: async (parent, { reseau }, ctx: Context) => {
    const args = reseau
      ? {
          line: { reseau: { code: reseau } }
        }
      : null;

    const lines = await getLines(ctx.client, args);
    return lines;
  }
};

export default Query;
