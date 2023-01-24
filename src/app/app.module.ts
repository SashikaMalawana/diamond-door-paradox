import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParadoxComponent } from './components/paradox/paradox.component';
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    ParadoxComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
