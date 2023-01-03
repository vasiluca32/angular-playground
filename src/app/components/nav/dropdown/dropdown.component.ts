import { Component, Input } from '@angular/core';
import { NavToggleService } from 'src/app/services/nav-toggle.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() subcategory: any = [];

  response: any;
  constructor(private toggleService: NavToggleService) {

  }

  sendResponse() {
    if (this.response === true) {
      this.response = false
    } else {
      this.response = true
    }

    this.toggleService.getRes(this.response)
  }

}
