import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActivityStreams } from './activity-streams/activity-streams.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityStreams
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
