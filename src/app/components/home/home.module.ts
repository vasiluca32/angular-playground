import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatComponent } from './stat/stat.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [StatComponent, HomeComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    StatComponent,
    HomeComponent
  ]
})
export class HomeModule { }
