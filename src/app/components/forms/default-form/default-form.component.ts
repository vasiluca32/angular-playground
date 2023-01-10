import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-default-form',
  templateUrl: './default-form.component.html',
  styleUrls: ['./default-form.component.css']
})
export class DefaultFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ])

  email = new FormControl('', [
    Validators.required,
    Validators.email,
  ])

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ])

  confirm_password = new FormControl('', [
    Validators.required,
  ])


  defaultForm = new FormGroup({
    username: this.username,
    email: this.email,
    password: this.password,
    confirm_password: this.confirm_password
  })

  displayValues() {
    console.log(this.defaultForm);
    this.defaultForm.reset()
  }

}
