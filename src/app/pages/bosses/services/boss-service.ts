import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { constTokens } from 'src/app/data/bosses';
import { Entry, KillStatisticResponse } from '../model/kill-statistic-response';
import { BossInfo } from '../model/boss-info';
import { constBossLocation } from 'src/app/data/bossInfo';

@Injectable({
  providedIn: 'root',
})
export class BossService {
  constructor(private http: HttpClient) {}

  getBossKillStatistics(world: string) {
    return this.http
      .get<KillStatisticResponse>(
        `https://api.tibiadata.com/v4/killstatistics/${world}`
      )
      .pipe(
        map((response) => {
          const bosses: BossInfo[] = [];

          for (const boss in constTokens) {
            const killStats = response.killstatistics.entries.find(
              (x) => x.race === boss
            );
            bosses.push({
              race: boss,
              name: constTokens[boss],
              lastDayKilled: killStats?.last_day_killed ?? 0,
              lastDayPlayersKilled: killStats?.last_day_players_killed ?? 0,
              locations: constBossLocation[boss],
            } as BossInfo);
          }
          console.log(bosses);
          return bosses;
        }),
        catchError((error: HttpErrorResponse) => {
          console.log('error');
          return of<BossInfo[]>();
        })
      );
  }
}
