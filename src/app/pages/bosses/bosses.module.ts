import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BossesComponent } from './bosses.component';
import { BossTileComponent } from './components/boss-tile/boss-tile.component';
import { BossesRoutingModule } from './bosses-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
import { BossDetailsModalComponent } from './components/boss-details-modal/boss-details-modal.component';
@NgModule({
  declarations: [BossesComponent, BossTileComponent, BossDetailsModalComponent],
  imports: [
    CommonModule,
    BossesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
  ],
})
export class BossesModule {}
