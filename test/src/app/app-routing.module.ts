import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FramesComponent } from './components/frames/frames.component';
import { InvitationComponent } from './components/invitation/invitation.component';
import { LensesComponent } from './components/lenses/lenses.component';
import { NumbersComponent } from './components/numbers/numbers.component';


const routes: Routes = [
  {path:'', component: FramesComponent},
  {path:'lenses', component: LensesComponent},
  {path:'numbers', component: NumbersComponent},
  {path:'invitation', component: InvitationComponent}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
