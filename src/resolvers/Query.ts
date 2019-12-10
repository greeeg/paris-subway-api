import { Context } from '../types';
import { getLines, getStations } from '../services/soap';
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
  },
  stations: async (parent, { line }, ctx: Context) => {
    const stations = await getStations(ctx.client, {
      station: { line: { id: line } }
    });
    return stations;
  }
};

export default Query;
