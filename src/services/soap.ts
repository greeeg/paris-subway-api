import {
  SOAPClient,
  GetLinesArgs,
  GetStationsArgs,
  GetDirectionsArgs,
  GetMissionsNextArgs
} from '../types/soap';
import { Line, Station, Direction, Mission } from '../types/graphql';
import { formatDate } from '../utils/date.utils';

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

export const getMissions = (
  client: SOAPClient,
  args: GetMissionsNextArgs
): Promise<Mission[]> => {
  return new Promise((resolve, reject) => {
    client.getMissionsNext(args, (err, result) => {
      if (err || !result) {
        reject(err);
        return;
      }

      if (!result.return.missions) {
        resolve([]);
        return;
      }

      const missions = result.return.missions.map(
        ({ id, direction, line, stationEndLine, stations, stationsDates }) => ({
          id,
          direction,
          line,
          stationEndLine,
          stations,
          stationsDates: stationsDates.map(date => formatDate(date))
        })
      );

      resolve(missions);
    });
  });
};
