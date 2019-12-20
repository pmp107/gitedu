import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicComponent } from './Music/music.component';
import { AddMusicComponent } from './add-music/add-music.component';
import { EditMusicComponent } from './edit-music/edit-music.component';
import { DeleteMusicComponent } from './delete-music/delete-music.component';
import { MusicDetailsComponent } from './music-details/music-details.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  { path:  'music', component:  MusicComponent},
  { path:  'addMusic', component:  AddMusicComponent},
  { path:  'editMusic/:id', component:  EditMusicComponent},
  { path:  'deleteMusic', component:  DeleteMusicComponent},
  { path:  'musicDetails/:id', component:  MusicDetailsComponent},
  { path:  '', component:  MusicComponent},
  { path:  '**', component:  NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
