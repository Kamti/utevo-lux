import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BossesComponent } from './bosses.component';
import { BossTileComponent } from './components/boss-tile/boss-tile.component';
import { BossesRoutingModule } from './bosses-routing.module';
import { MatCardModule } from '@angular/material/card';

import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [BossesComponent, BossTileComponent],
  imports: [CommonModule, BossesRoutingModule, MatCardModule, MatButtonModule],
})
export class BossesModule {}
