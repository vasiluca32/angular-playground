import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavToggleService {
  sendData = new Subject();
  getData = new Subject();
  constructor() { }

  transmitData(tog: any) {
    this.sendData.next(tog);
  }

  getRes(res: any) {
    this.getData.next(res);
  }
}

