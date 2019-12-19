import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicComponent } from './Music/music.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
import { ConvertToSpacePipe } from './Shared/convert-to-space.pipe';
import { SearchMusicPipe } from './Shared/search-music.pipe';
import { NavComponent } from './nav/nav.component';
import { AddMusicComponent } from './add-music/add-music.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditMusicComponent } from './edit-music/edit-music.component';
import { DeleteMusicComponent } from './delete-music/delete-music.component';
import { DetailedMusicComponent } from './detailed-music/detailed-music.component'

@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    HeaderComponent,
    CounterComponent,
    ConvertToSpacePipe,
    SearchMusicPipe,
    NavComponent,
    AddMusicComponent,
    PageNotFoundComponent,
    EditMusicComponent,
    DeleteMusicComponent,
    DetailedMusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent,MusicComponent]
})
export class AppModule { }
