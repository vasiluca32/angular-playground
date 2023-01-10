import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultFormComponent } from './default-form/default-form.component';
import { HorizontalFormComponent } from './horizontal-form/horizontal-form.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FormsComponent, DefaultFormComponent, HorizontalFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [

  ]
})
export class MyFormsModule { }
