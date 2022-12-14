import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBottomComponent } from './nav-bottom/nav-bottom.component';
import { NavTopComponent } from './nav-top/nav-top.component';
import { NavComponent } from './nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DropdownComponent } from './dropdown/dropdown.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavComponent,
    NavBottomComponent,
    NavTopComponent,
    DropdownComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule

  ],
  exports: [
    NavComponent
  ]
})
export class NavModule { }
