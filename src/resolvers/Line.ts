import { Context } from '../types';
import { getStations } from '../services/soap';
import { LineResolvers } from '../types/graphql';

const Line: LineResolvers = {
  stations: async ({ id }, args, ctx: Context) => {
    const stations = await getStations(ctx.client, {
      station: { line: { id } }
    });

    return stations;
  }
};

export default Line;
