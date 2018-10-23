import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrawchatComponent } from './components/drawchat/drawchat.component';
import { HubComponent } from './components/hub/hub.component';

const routes: Routes = [
  { path: 'draw', component: DrawchatComponent },
  { path: 'hub', component: HubComponent },
  { path: '', pathMatch: 'full', redirectTo: '/hub' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
