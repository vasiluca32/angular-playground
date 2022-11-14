import { Component, OnInit } from '@angular/core';
import { NavBottomLinksService } from 'src/app/services/nav-bottom-links.service';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bottom',
  templateUrl: './nav-bottom.component.html',
  styleUrls: ['./nav-bottom.component.css'],
  providers: [NavBottomLinksService, DropdownComponent]
})
export class NavBottomComponent implements OnInit {
  angleDown = faAngleDown
  data: any = [];
  activeTitle: string = '';

  constructor(private linkService: NavBottomLinksService) { }

  ngOnInit(): void {
    this.data = this.linkService.getLinks()
  }

  setActiveTitle(title: string) {
    this.activeTitle = title
  }

}
