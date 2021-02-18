import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LensesComponent } from './components/lenses/lenses.component';
import { NumbersComponent } from './components/numbers/numbers.component';
import { OrderComponent } from './components/order/order.component';
import { GlassesComponent } from './components/glasses/glasses.component';
import { ShopComponent } from './components/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    
    LensesComponent,
    NumbersComponent,
    OrderComponent,
    GlassesComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
