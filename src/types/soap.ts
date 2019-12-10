/*
 * Types are converted from RATP official documentation
 * See: http://data.ratp.fr/api/datasets/1.0/horaires-temps-reel/attachments/doc_wsiv_html
 */

import * as soap from 'soap';

type Heure = string;
type Date = string;

interface Reseau {
  id: string;
  code: string;
  name: string;
  image: string;
}

interface Line {
  id: string;
  code: string;
  codeStif: string;
  name: string;
  image: string;
  realm: string;
  reseau: Reseau;
}

interface Direction {
  sens: string;
  name: string;
  line: Line;
  stationsEndLine: Line | Line[];
}

interface Station {
  id: string;
  name: string;
  line: Line;
  direction?: Direction;
  geoPointA?: GeoPoint;
  geoPointB?: GeoPoint;
  stationArea?: StationArea;
  idsNextA: string[];
  idsNextR: string[];
}

interface StationArea {
  id: string;
  name: string;
  zoneCarteOrange?: string;
  access: StationAccess[];
  stations: Station[];
  tarifsToParis: Tarif[];
}

interface StationAccess {
  id: string;
  name: string;
  timeStart?: Heure;
  timeEnd?: Heure;
  address?: string;
  index?: string;
  timeDaysLabel?: string;
  timeDaysStatus?: string;
  x?: string;
  y?: string;
}

interface Mission {
  id?: string;
  code?: string;
  line: Line;
  direction: Direction;
  stationEndLine?: Station;
  stationsDates: Date[];
  stationsMessages: string[];
  stationsPlatforms: string[];
  stationsStops: boolean[];
  perturbations: Perturbation[];
  stations: Station[];
}

interface Tarif {
  demiTarif?: number;
  pleinTarif: number;
  viaLine?: Line;
  viaReseau?: Reseau;
}

interface Perturbation {
  source: string;
  level: string;
  message: {
    text: string;
  };
}

interface GeoPoint {
  x: number;
  y: number;
}

export interface GetLinesArgs {
  line: {
    id?: string;
    code?: string;
    codeStif?: string;
    realm?: string;
    reseau?: {
      code?: string;
    };
  };
}

interface GetLinesResponse {
  return: Line[];
}

export interface GetDirectionsArgs extends GetLinesArgs {}

interface GetDirectionsResponse {
  return: {
    ambiguityMessage?: string;
    ambiguousLines?: Line[];
    argumentLine?: Line;
    directions?: [Direction, Direction];
  };
}

export interface GetStationsArgs {
  station: {
    id?: string;
    name?: string;
    line?: {
      id?: string;
      code?: string;
      codeStif?: string;
      realm?: string;
      reseau?: {
        code?: string;
      };
    };
    direction?: {
      sens?: string;
    };
  };
}

interface GetStationsResponse {
  return: {
    ambiguityMessage?: string;
    ambiguousLines?: Line[];
    argumentLine?: Line;
    stations?: Station[];
  };
}

export interface GetMissionsNextArgs {
  station: {
    id: string;
    line: {
      id: string;
    };
  };
  direction: {
    sens: string;
  };
  dateStart?: Date;
  limit?: number;
}

interface GetMissionsNextResponse {
  return: {
    argumentDate: Date;
    argumentLine?: Line;
    argumentDirection?: Direction;
    argumentStation?: Station;
    missions?: Mission[];
  };
}

type GetLinesCallback = (err: any, result: GetLinesResponse) => void;
type GetDirectionsCallback = (err: any, result: GetDirectionsResponse) => void;
type GetStationsCallback = (err: any, result: GetStationsResponse) => void;
type GetMissionsNextCallback = (
  err: any,
  result: GetMissionsNextResponse
) => void;

export interface SOAPClient extends soap.Client {
  getLines(args: GetLinesArgs, callback: GetLinesCallback): void;
  getDirections(args: GetDirectionsArgs, callback: GetDirectionsCallback): void;
  getStations(args: GetStationsArgs, callback: GetStationsCallback): void;
  getMissionsNext(
    args: GetMissionsNextArgs,
    callback: GetMissionsNextCallback
  ): void;
}
