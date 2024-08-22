import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BossesComponent } from './bosses.component';

const routes: Routes = [
  {
    path: '',
    component: BossesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BossesRoutingModule {}
