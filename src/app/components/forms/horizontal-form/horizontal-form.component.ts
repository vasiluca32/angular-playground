import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  selector: 'app-horizontal-form',
  templateUrl: './horizontal-form.component.html',
  styleUrls: ['./horizontal-form.component.css']
})
export class HorizontalFormComponent implements OnInit {

  credentials = {
    username: '',
    email: '',
    mobile: '',
    password: '',
    password_confirm: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  displayValues() {
    alert('is working')
  }
}
