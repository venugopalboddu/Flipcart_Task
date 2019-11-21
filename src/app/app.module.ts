import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenComponent } from './men/men.component';
import { FemaleComponent } from './female/female.component';
import { MobileComponent } from './mobile/mobile.component';
import { WelComponent } from './wel/wel.component';
import { ErrComponent } from './err/err.component';
import { LaptopComponent } from './laptop/laptop.component';
import { ToysComponent } from './toys/toys.component';
import { StoyComponent } from './stoy/stoy.component';
import { RtoyComponent } from './rtoy/rtoy.component';
import { DetailsComponent } from './details/details.component';
import { LdetailsComponent } from './ldetails/ldetails.component';

@NgModule({
  declarations: [
    AppComponent,
    MenComponent,
    FemaleComponent,
    MobileComponent,
    WelComponent,
    ErrComponent,
    LaptopComponent,
    ToysComponent,
    StoyComponent,
    RtoyComponent,
    DetailsComponent,
    LdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
