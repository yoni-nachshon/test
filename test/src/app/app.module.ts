import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LensesComponent } from './components/lenses/lenses.component';
import { NumbersComponent } from './components/numbers/numbers.component';

import { FrameComponent } from './components/frame/frame.component';
import { LensComponent } from './components/lens/lens.component';
import { InvitationComponent } from './components/invitation/invitation.component';
import { FramesComponent } from './components/frames/frames.component';

@NgModule({
  declarations: [
    AppComponent,
    
    LensesComponent,
    NumbersComponent,
    FrameComponent,
    LensComponent,
    InvitationComponent,
    FramesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
