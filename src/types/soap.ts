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
