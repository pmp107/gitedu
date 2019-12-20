import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicComponent } from './Music/music.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooComponent } from './foo/foo.component';
import { ActorComponent } from './actor/actor.component';

import { CounterComponent } from './counter/counter.component';
import { FilterDataPipe } from './Shared/filter-data.pipe';
import { AddMusicComponent } from './add-music/add-music.component';
import { EditMusicComponent } from './edit-music/edit-music.component';
import { DeleteMusicComponent } from './delete-music/delete-music.component';
import { MusicDetailsComponent } from './music-details/music-details.component';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations: [
    AppComponent,MusicComponent, HeaderComponent, FooterComponent, FooComponent, ActorComponent, CounterComponent, FilterDataPipe, AddMusicComponent, EditMusicComponent, DeleteMusicComponent, MusicDetailsComponent, NotfoundComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,MusicComponent, HeaderComponent, FooterComponent]
})
export class AppModule { }
