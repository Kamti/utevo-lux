import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BossInfo } from '../../model/boss-info';
import { BossDetailsModalComponent } from '../boss-details-modal/boss-details-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription, timer } from 'rxjs';
import { Color } from '../../model/color';

@Component({
  selector: 'app-boss-tile',
  templateUrl: './boss-tile.component.html',
  styleUrls: ['./boss-tile.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BossTileComponent {
  @Input() boss: BossInfo;
  readonly dialog: MatDialog;
  public timeChecked: Date;
  public secondsCheckedAgo: number;
  public timerSub: Subscription;
  public color: {} = { 'background-color': 'rgb(24, 21, 49)' };
  public colorRgb: Color = new Color(24, 21, 49);
  public timeText: string;

  firstname: string = 'Pascal';
  changeName() {
    this.firstname = 'Brad';
    console.log('changeName' + this.boss.race);
  }
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
      this.secondsCheckedAgo = 0;
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
      this.getTime();
      this.getColor();
    });
  }

  getTime() {
    console.log('time' + this.boss.race);
    if (
      this.secondsCheckedAgo == undefined ||
      this.secondsCheckedAgo >=
        (this.boss?.respawn?.minutesBeforePoof ?? 30) * 60
    )
      this.timeText = 'should be checked';
    else if (this.secondsCheckedAgo < 60)
      this.timeText = `${this.secondsCheckedAgo} seconds ago`;
    else
      this.timeText = `${Math.floor(this.secondsCheckedAgo / 60)} minutes ${
        this.secondsCheckedAgo % 60
      } seconds ago`;
  }

  getColor() {
    console.log('color' + this.boss.race);
    if (this.secondsCheckedAgo === 1) this.colorRgb = new Color(65, 110, 21);
    else if (this.secondsCheckedAgo < 25) this.colorRgb.r = this.colorRgb.r + 5;
    else if (this.secondsCheckedAgo < 50) this.colorRgb.g = this.colorRgb.g - 5;
  }
}
