import { Context } from '../types';
import {
  getLines,
  getStations,
  getDirections,
  getMissions
} from '../services/soap';
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
  line: async (parent, { id }, ctx: Context) => {
    const lines = await getLines(ctx.client, {
      line: { id }
    });

    return lines[0];
  },
  stations: async (parent, { line }, ctx: Context) => {
    const stations = await getStations(ctx.client, {
      station: { line: { id: line } }
    });
    return stations;
  },
  station: async (parent, { id }, ctx: Context) => {
    const stations = await getStations(ctx.client, {
      station: { id }
    });

    return stations[0];
  },
  directions: async (parent, { line }, ctx: Context) => {
    const directions = await getDirections(ctx.client, {
      line: { id: line }
    });
    return directions;
  },
  missions: async (
    parent,
    { station, line, direction, date },
    ctx: Context
  ) => {
    const missions = await getMissions(ctx.client, {
      station: { id: station, line: { id: line } },
      direction: { sens: direction },
      dateStart: date,
      limit: 5
    });
    return missions;
  }
};

export default Query;
