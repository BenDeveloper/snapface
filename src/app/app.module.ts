import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { registerLocaleData } from '@angular/common';
import * as en from '@angular/common/locales/en';
import { NumbersComponent } from './numbers/numbers.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    NumbersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-GB'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(en.default);
  }
}
