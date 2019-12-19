import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { musicComponent } from './music/music.component';
import { FormsModule } from '@angular/forms';

import { CounterComponent } from './counter/counter.component';
import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';
import { ConverToSpace1Pipe } from './shared/conver-to-space1.pipe';
import { FilterPipe } from './shared/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,musicComponent, FilterPipe, CounterComponent, ConvertToSpacePipe, ConverToSpace1Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
