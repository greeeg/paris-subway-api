import { SOAPClient, GetLinesArgs } from '../types/soap';
import { Line } from '../types/graphql';

export const getLines = (
  client: SOAPClient,
  args: GetLinesArgs
): Promise<Line[]> => {
  return new Promise((resolve, reject) => {
    client.getLines(args, (err, result) => {
      if (err) {
        reject(err);
      }

      const lines = result.return.map(({ id, code, name }) => ({
        id,
        code,
        name
      }));

      resolve(lines);
    });
  });
};
