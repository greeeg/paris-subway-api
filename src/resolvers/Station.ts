import { Context } from '../types';
import { getLines, getMissions } from '../services/soap';
import { StationResolvers } from '../types/graphql';

const Station = {
  line: async (parent, args, ctx: Context) => {
    const lines = await getLines(ctx.client, {
      line: { id: parent.line.id }
    });
    return lines[0];
  },
  missions: async (parent, { direction, date }, ctx: Context) => {
    const station = parent.id;
    const line = parent.line.id;

    const missions = await getMissions(ctx.client, {
      station: { id: station, line: { id: line } },
      direction: { sens: direction },
      dateStart: date,
      limit: 5
    });
    return missions;
  }
};

export default Station;
