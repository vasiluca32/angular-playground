import { Component, OnInit } from '@angular/core';
import { DefaultFormComponent } from '../default-form/default-form.component';
import { HorizontalFormComponent } from '../horizontal-form/horizontal-form.component';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  providers: []
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
