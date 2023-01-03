import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavToggleService {
  sendData = new Subject();
  constructor() { }

  transmitData(tog: any) {
    this.sendData.next(tog);
  }
}
