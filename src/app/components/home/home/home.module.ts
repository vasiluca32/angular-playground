import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatComponent } from '../stat/stat.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [StatComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    StatComponent
  ]
})
export class HomeModule { }
