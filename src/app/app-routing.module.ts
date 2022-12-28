import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PaginaNotFoundComponent } from './pages/pagina-not-found/pagina-not-found.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'**', component:PaginaNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
