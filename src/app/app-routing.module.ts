import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { MartialartsComponent } from './martialarts/martialarts.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'martialarts', component: MartialartsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
