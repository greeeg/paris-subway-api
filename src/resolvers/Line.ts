import { Context } from '../types';
import { getStations, getDirections } from '../services/soap';
import { LineResolvers } from '../types/graphql';

const Line: LineResolvers = {
  stations: async ({ id }, args, ctx: Context) => {
    const stations = await getStations(ctx.client, {
      station: { line: { id } }
    });

    return stations;
  },
  directions: async ({ id }, args, ctx: Context) => {
    const directions = await getDirections(ctx.client, {
      line: { id }
    });
    return directions;
  }
};

export default Line;
