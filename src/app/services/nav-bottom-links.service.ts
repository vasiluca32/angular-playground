import { Injectable } from '@angular/core';
import { DropdownComponent } from '../components/nav/dropdown/dropdown.component';

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

  constructor(private dropdown: DropdownComponent) { }

  getLinks() {
    return this.links2;
  }

  getData(param: string) {

    let myObject: any = '';
    let subcategory: any = '';
    let title: string = '';
    let sublinks: Array<any> = [];

    this.links2.forEach(element => {
      for (const [key, value] of Object.entries(element)) {
        if (value === param) {
          myObject = element
          title = myObject.title;
        }
      }
    });


    if (myObject.subcategory.length > 0) {
      subcategory = [...myObject.subcategory]
    } else {
      return
    }

    this.dropdown.toRender(title, subcategory)


  }


}