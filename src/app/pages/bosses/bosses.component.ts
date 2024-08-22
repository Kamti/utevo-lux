import { Component } from '@angular/core';
import { Entry } from './model/kill-statistic-response';
import { BossService } from './services/boss-service';
import { BossInfo } from './model/boss-info';

@Component({
  selector: 'app-bosses',
  templateUrl: './bosses.component.html',
  styleUrls: ['./bosses.component.scss'],
})
export class BossesComponent {
  bosses: BossInfo[] = [];

  constructor(private bossService: BossService) {}

  ngOnInit() {
    const sub = this.bossService
      .getBossKillStatistics('Nevia')
      .subscribe((x) => (this.bosses = x));
    console.log('d');
  }
}
