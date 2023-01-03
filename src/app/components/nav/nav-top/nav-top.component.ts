import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavBottomComponent } from '../nav-bottom/nav-bottom.component';
import { NavToggleService } from 'src/app/services/nav-toggle.service';


@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css'],
  providers: [NavBottomComponent]
})
export class NavTopComponent implements OnInit {
  myText = ''
  faSearch = faSearch;
  faBell = faBell;
  faSliders = faSliders;
  faMenu = faBars;

  @Input() control: FormControl = new FormControl()
  @Input() type = 'text'
  @Input() placeholder = 'search'
  @Input() format = ''
  @ViewChild('inputText') inputText: any;

  toggle: any = false;

  constructor(private toggleService: NavToggleService) {

  }

  ngOnInit(): void {
    this.toggleService.getData.subscribe(res => {
      this.toggle = res
      this.toggleMenu()
    })
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

  toggleMenu() {

    if (this.toggle === true) {
      this.toggle = false;
    }
    else {
      this.toggle = true;
    }
    this.toggleService.transmitData(this.toggle);

  }


}
