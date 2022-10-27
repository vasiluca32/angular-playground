import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavBottomLinksService {

  links: string[] = ["Dashboard", 'Widgets', 'UI Elements', "Forms", "Data", "Pages", "Apps", "Documentation"]

  links2: Array<Object> = [
    {
      "title": "Dashboard",
      "subcategory": []
    },
    {
      "title": "Widgets",
      "subcategory": []
    },
    {
      "title": "UI Elements",
      "subcategory": [
        {
          "title": "Basic Elements",
          "sublinks": ["Accordion", "Buttons", "Badges", "Breadcrumbs", "Dropdown"]
        },
        {
          "title": "Advanced Elements",
          "sublinks": ["Dragula", "Caroussel", "Slider", "Loader", "Popup"]
        },
        {
          "title": "Icons",
          "sublinks": ["Flag", "fontawesome", "Whatever"]
        }
      ]
    },
    {
      "title": "Forms",
      "subcategory": [{
        "title": "",
        "sublinks": ["Basic Elements", "Advanced Elements", "Wizard"]
      }]
    },
    {
      "title": "Data",
      "subcategory": [{
        "title": "Charts",
        "sublinks": ["Chart 1", "Chart 2", "Chart 3"]
      },
      {
        "title": "Tables",
        "sublinks": ["Table 1", "Table 2", "Table 3"]
      }]
    },
    {
      "title": "Pages",
      "subcategory": [{
        "title": "User Pages",
        "sublinks": ["Page 1", "Page 2", "Page 3"]
      },
      {
        "title": "Error pages",
        "sublinks": ["Page 1", "Page 2", "Page 3"]
      }]
    },
    {
      "title": "Apps",
      "subcategory": [{
        "title": "",
        "sublinks": ["Email", "Calendar", "Todo"]
      }]
    },
    {
      "title": "Documentation",
      "subcategory": [{
        "title": "",
        "sublinks": []
      }]
    }
  ]

  constructor() { }

  getLinks() {
    return this.links2
  }

}