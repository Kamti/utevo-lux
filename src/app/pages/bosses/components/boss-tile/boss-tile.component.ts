import { Component, Input } from '@angular/core';
import { Entry } from '../../model/kill-statistic-response';
import { BossInfo } from '../../model/boss-info';

@Component({
  selector: 'app-boss-tile',
  templateUrl: './boss-tile.component.html',
  styleUrls: ['./boss-tile.component.scss'],
})
export class BossTileComponent {
  @Input() boss: BossInfo;

  ngOnInit() {
    console.log(this.boss);
  }
}
