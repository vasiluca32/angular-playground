import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  uielem = false;
  title1 = '';
  data1: any = []

  constructor() { }

  ngOnInit(): void {
  }

  toRender(title: string, subcategory: any) {
    this.title1 = title;
    console.log(typeof (this.title1))
  }



}
