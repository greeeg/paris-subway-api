import {
  SOAPClient,
  GetLinesArgs,
  GetStationsArgs,
  GetDirectionsArgs
} from '../types/soap';
import { Line, Station, Direction } from '../types/graphql';

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

export const getStations = (
  client: SOAPClient,
  args: GetStationsArgs
): Promise<Station[]> => {
  return new Promise((resolve, reject) => {
    client.getStations(args, (err, result) => {
      if (err || !result) {
        reject(err);
        return;
      }

      const stations = result.return.stations.map(({ id, name, line }) => ({
        id,
        name,
        line
      }));

      resolve(stations);
    });
  });
};

export const getDirections = (
  client: SOAPClient,
  args: GetDirectionsArgs
): Promise<Direction[]> => {
  return new Promise((resolve, reject) => {
    client.getDirections(args, (err, result) => {
      if (err || !result) {
        reject(err);
        return;
      }

      const directions = result.return.directions.map(
        ({ sens, name, line }) => ({
          sens,
          name,
          line
        })
      );

      resolve(directions);
    });
  });
};
