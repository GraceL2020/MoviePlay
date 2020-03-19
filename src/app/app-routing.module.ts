import { PurchasesComponent } from './account/purchases/purchases.component';
import { FavoritesComponent } from './account/favorites/favorites.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { MovieCardListComponent } from './movies/movie-card-list/movie-card-list.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { CreateMovieComponent } from './admin/movies/create-movie/create-movie.component';
import { CreateCastComponent } from './admin/movies/create-cast/create-cast.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'genre/:id', component: MovieCardListComponent },
  { path: 'movie/create', component: CreateMovieComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'cast/create', component: CreateCastComponent },
  { path: 'cast/:id', component: MovieDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'purchases', component: PurchasesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
