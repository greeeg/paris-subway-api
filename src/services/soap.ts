import { SOAPClient, GetLinesArgs } from '../types/soap';
import { Line } from '../types/graphql';

export const getLines = (
  client: SOAPClient,
  args: GetLinesArgs
): Promise<Line[]> => {
  return new Promise((resolve, reject) => {
    client.getLines(args, (err, result) => {
      if (err || !result) {
        reject(err);
        return;
      }

      const lines = result.return.map(
        ({ id, code, codeStif, name, image, reseau }) => ({
          id,
          code,
          codeStif,
          name,
          image,
          reseau
        })
      );

      resolve(lines);
    });
  });
};
