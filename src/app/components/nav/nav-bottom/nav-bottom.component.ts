import { Component, OnInit } from '@angular/core';
import { NavBottomLinksService } from 'src/app/services/nav-bottom-links.service';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-nav-bottom',
  templateUrl: './nav-bottom.component.html',
  styleUrls: ['./nav-bottom.component.css'],
  providers: [NavBottomLinksService, DropdownComponent]
})
export class NavBottomComponent implements OnInit {

  data: any = [];
  hover: boolean = false;

  constructor(private linkService: NavBottomLinksService) { }

  ngOnInit(): void {
    this.data = this.linkService.getLinks()
  }

  myFunction(event: Event | any) {
    this.hover = true
    this.linkService.getData(event.target.innerText)
  }

  myFunction2() {
    this.hover = false
  }
}
