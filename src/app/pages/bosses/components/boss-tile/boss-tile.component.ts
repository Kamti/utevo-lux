import { Component, inject, Input } from '@angular/core';
import { BossInfo } from '../../model/boss-info';
import { BossDetailsModalComponent } from '../boss-details-modal/boss-details-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-boss-tile',
  templateUrl: './boss-tile.component.html',
  styleUrls: ['./boss-tile.component.scss'],
})
export class BossTileComponent {
  @Input() boss: BossInfo;
  readonly dialog: MatDialog;
  public timeChecked: Date;
  public secondsCheckedAgo: number;
  public timerSub: Subscription;
  constructor(dialog: MatDialog) {
    this.dialog = dialog;
  }

  openModal() {
    const dialogRef = this.dialog.open(BossDetailsModalComponent, {
      data: this.boss,
      minWidth: '60rem',
    });
    const sub = dialogRef.componentInstance.checkedEmitter.subscribe((time) => {
      this.timeChecked = time;
      this.secondsCheckedAgo = 59;
      this.observableTimer();
    });
    dialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe();
    });
  }

  observableTimer() {
    if (this.timerSub) this.timerSub.unsubscribe();
    this.timerSub = timer(
      1000,
      (this.boss?.respawn?.minutesBeforePoof ?? 30) * 60
    ).subscribe(() => {
      this.secondsCheckedAgo = this.secondsCheckedAgo + 1;
    });
  }

  getTime() {
    if (
      this.secondsCheckedAgo == undefined ||
      this.secondsCheckedAgo >=
        (this.boss?.respawn?.minutesBeforePoof ?? 30) * 60
    )
      return 'should be checked';
    else if (this.secondsCheckedAgo < 60)
      return `${this.secondsCheckedAgo} seconds ago`;
    else
      return `${Math.floor(this.secondsCheckedAgo / 60)} minutes ${
        this.secondsCheckedAgo % 60
      } seconds ago`;
  }
}
