import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LensesComponent } from './components/lenses/lenses.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  {path:'shop', component: ShopComponent},
  {path:'lenses', component: LensesComponent}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
