import { Component, OnInit } from '@angular/core';
import { StatComponent } from './stat/stat.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [StatComponent]
})
export class HomeComponent implements OnInit {
  info: Array<any> = [
    {
      "icon": "fas fa-shopping-bag",
      "title": "Total invoices",
      "statistic": "75650",
      "trend": "39% more growth"
    },
    {
      "icon": "far fa-user",
      "title": "New users",
      "statistic": "37650",
      "trend": "43% more this year"
    },
    {
      "icon": "fas fa-tv",
      "title": "Unique visits",
      "statistic": "1349",
      "trend": "69% increase"
    },
    {
      "icon": "fas fa-dharmachakra",
      "title": "Bounce rate",
      "statistic": "37580",
      "trend": "65% higher rate"
    }
  ]
  statBackground: Array<string> = ['#1d2939', '#0766c6', '#dd3544', '#00b297']

  constructor() { }

  ngOnInit(): void {
  }

}
