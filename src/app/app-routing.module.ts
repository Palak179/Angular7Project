import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { MovieComponent } from './movie/movie.component';
import { PlanetComponent } from './planet/planet.component';
const routes: Routes = [
  {path: 'character', component:CharacterComponent},
  {path: 'movie',component: MovieComponent},
  {path:'planet',component:PlanetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
