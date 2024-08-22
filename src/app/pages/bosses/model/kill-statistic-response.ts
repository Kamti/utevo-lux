export interface KillStatisticResponse {
  killstatistics: KillStatistic;
}

export interface KillStatistic {
  entries: Entry[];
}

export interface Entry {
  race: string;
  last_day_killed: number;
  last_day_players_killed: number;
}
