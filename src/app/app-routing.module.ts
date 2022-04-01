import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NumbersComponent } from './numbers/numbers.component';

const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'facesnaps', component: FaceSnapListComponent },
    { path: 'numbers', component: NumbersComponent }
  ];

  @NgModule({
      imports: [
          RouterModule.forRoot(routes)
      ],
      exports: [
          RouterModule
      ]
  })

export class AppRoutingModule {}