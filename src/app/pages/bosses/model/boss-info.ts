export interface BossInfo {
  race: string;
  name: string;
  lastDayKilled: number;
  lastDayPlayersKilled: number;
  locations: Location[];
  respawn: Respawn;
}

export class Location {
  name: string;
  movieUrl: string;
  mapUrl: string;

  constructor(name: string, movieUrl: string, mapUrl: string) {
    this.name = name;
    this.movieUrl = movieUrl;
    this.mapUrl = mapUrl;
  }
}

export class Respawn {
  daysFrequencyMin: number;
  daysFrequencyMax: number;
  minutesBeforePoof: number;
  spawnLocations: number;

  constructor(
    daysFrequencyMin: number,
    daysFrequencyMax: number,
    minutesBeforePoof: number,
    spawnLocations: number
  ) {
    this.daysFrequencyMin = daysFrequencyMin;
    this.daysFrequencyMax = daysFrequencyMax;
    this.minutesBeforePoof = minutesBeforePoof;
    this.spawnLocations = spawnLocations;
  }
}
