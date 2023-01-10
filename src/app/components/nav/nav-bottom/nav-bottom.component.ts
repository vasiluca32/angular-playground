import { Component, HostListener, OnInit } from '@angular/core';
import { NavBottomLinksService } from 'src/app/services/nav-bottom-links.service';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { NavToggleService } from 'src/app/services/nav-toggle.service';


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

  toggleStatus: any = true;
  innerWidth: any;

  constructor(private linkService: NavBottomLinksService, private toggleService: NavToggleService) { }

  ngOnInit(): void {
    this.data = this.linkService.getLinks()
    this.toggleService.sendData.subscribe(tog => {
      this.toggleStatus = tog
    })

  }

  @HostListener('window:resize')
  onResize() {
    this.innerWidth = window.innerWidth
    if (innerWidth > 768) {
      this.toggleStatus = true
    } else {
      this.toggleStatus = false
    }
  }

  setActiveTitle(title: string) {
    this.activeTitle = title
  }

}
