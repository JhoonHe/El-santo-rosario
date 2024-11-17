import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private day = new BehaviorSubject<any>(null); // TODO: Solucionar el tipado, la lógica 

  getDay() {
    return this.day.asObservable();
  }

  setDay(value: any) {
    this.day.next(value);
  }
}
