import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from '../dashboard/dashboard.component';
import { DetailComponent } from '../detailpage/game-detail.component';
import { ImpressumComponent } from '../impressum/impressum.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard:id', pathMatch: 'full'},
  { path: 'dashboard:id', component: DashboardComponent },
  { path: 'impressum', component: ImpressumComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

}
