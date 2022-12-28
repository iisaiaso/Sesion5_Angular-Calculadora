import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaculatorComponent } from './caculator/caculator.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    CaculatorComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    CaculatorComponent,
    NavbarComponent
  ]
})
export class ComponentsModule { }
