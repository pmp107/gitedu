import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicComponent } from './Music/music.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddMusicComponent } from './add-music/add-music.component';
import { EditMusicComponent } from './edit-music/edit-music.component';
import { DeleteMusicComponent } from './delete-music/delete-music.component';
import { NavComponent } from './nav/nav.component';
import { DetailedMusicComponent } from './detailed-music/detailed-music.component';


const routes: Routes = [
  { path:"music",component:MusicComponent},
  { path:"addMusic",component:AddMusicComponent},
  { path:"editMusic/:id",component:EditMusicComponent},
  { path:"deleteMusic/:id",component:DeleteMusicComponent},
  { path:"music/detailedMusic/:id",component:DetailedMusicComponent},
  { path:"**",component:PageNotFoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
