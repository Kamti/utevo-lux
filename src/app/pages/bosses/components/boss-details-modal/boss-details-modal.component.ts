import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BossInfo } from '../../model/boss-info';

@Component({
  selector: 'app-boss-details-modal',
  templateUrl: './boss-details-modal.component.html',
  styleUrls: ['./boss-details-modal.component.scss'],
})
export class BossDetailsModalComponent {
  boss: BossInfo;
  @Output() checkedEmitter = new EventEmitter<Date>();

  constructor(
    public dialogRef: MatDialogRef<BossDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BossInfo
  ) {
    console.log(data);
    this.boss = data;
  }

  getRespawnFrequencyText() {
    return this.boss.respawn === undefined
      ? ''
      : `Respawns every ${this.boss.respawn.daysFrequencyMin}`;
  }

  setCheckedTime() {
    this.checkedEmitter.emit(new Date());
  }
}
