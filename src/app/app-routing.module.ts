import { LdetailsComponent } from './ldetails/ldetails.component';
import { StoyComponent } from './stoy/stoy.component';
import { ToysComponent } from './toys/toys.component';
import { ErrComponent } from './err/err.component';
import { WelComponent } from './wel/wel.component';
import { MobileComponent } from './mobile/mobile.component';
import { FemaleComponent } from './female/female.component';
import { MenComponent } from './men/men.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaptopComponent } from './laptop/laptop.component';
import { RtoyComponent } from './rtoy/rtoy.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  { path: '', component: WelComponent},
  { path: 'men', component: MenComponent},
  { path: 'female', component: FemaleComponent},
  { path: 'mobile', component: MobileComponent},
  { path: 'laptop', component: LaptopComponent},
  { path: 'details/:name/:price/:img', component: DetailsComponent},
  { path: 'ldetails/:name/:price/:img', component: LdetailsComponent},
  { path: 'toy', component: ToysComponent,
    children: [
      { path: 'stoy', component: StoyComponent},
      { path: 'rtoy', component: RtoyComponent}
      ]
  },
  { path: '**', component: ErrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
