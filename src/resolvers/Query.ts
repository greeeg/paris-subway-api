import { Context } from '../types';
import { getLines } from '../services/soap';

const Query = {
  lines: async (parent, args, ctx: Context) => {
    const lines = await getLines(ctx.client, {
      line: { reseau: { code: 'metro' } }
    });
    return lines;
  }
};

export default Query;
