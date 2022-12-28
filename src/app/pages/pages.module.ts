import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { PaginaNotFoundComponent } from './pagina-not-found/pagina-not-found.component';



@NgModule({
  declarations: [
    HomeComponent,
    PaginaNotFoundComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    HomeComponent,
    PaginaNotFoundComponent
  ]
})
export class PagesModule { }
