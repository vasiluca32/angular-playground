import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faSliders } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {
  myText = ''
  faSearch = faSearch;
  faBell = faBell;
  faSliders = faSliders;

  @Input() control: FormControl = new FormControl()
  @Input() type = 'text'
  @Input() placeholder = 'search'
  @Input() format = ''
  @ViewChild('inputText') inputText: any;

  constructor() {

  }

  ngOnInit(): void {
  }

  handleClick() {
    this.myText = this.control.value
    alert(this.myText)
    this.inputText.nativeElement.value = ''
  }

  handleKey(event: Event) {
    event.preventDefault()
    this.myText = this.control.value
    alert(this.myText)
    this.inputText.nativeElement.value = ''
  }

}
