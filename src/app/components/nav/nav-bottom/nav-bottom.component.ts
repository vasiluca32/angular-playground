import { Component, OnInit } from '@angular/core';
import { NavBottomLinksService } from 'src/app/services/nav-bottom-links.service';

@Component({
  selector: 'app-nav-bottom',
  templateUrl: './nav-bottom.component.html',
  styleUrls: ['./nav-bottom.component.css'],
  providers: [NavBottomLinksService]
})
export class NavBottomComponent implements OnInit {

  data: any = [];
  hover: boolean = false;

  constructor(private linkService: NavBottomLinksService) { }

  ngOnInit(): void {

    this.data = this.linkService.getLinks()
    console.log(this.data)
  }

  myFunction() {
    this.hover = true
  }

  myFunction2() {
    this.hover = false
  }
}
