import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { NumbersComponent } from './numbers/numbers.component';

const routes: Routes = [
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