export interface BossInfo {
  race: string;
  name: string;
  lastDayKilled: number;
  lastDayPlayersKilled: number;
  locations: Location[];
  fixedDaysFrequency: FixedDaysFrequency;
  minutesBeforePoof: number;
}

export interface FixedDaysFrequency {
  min: string;
  max: number;
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
