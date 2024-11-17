import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private shared: SharedService) { }

  setDay(day: number) {
    let name_day = '';
    switch (day) {
      case 1:
        name_day = 'lunes';
        break;
      case 2:
        name_day = 'martes';
        break;
      case 3:
        name_day = 'miercoles';
        break;
      case 4:
        name_day = 'jueves';
        break;
      case 5:
        name_day = 'viernes';
        break;
      case 6:
        name_day = 'sabado';
        break;
      case 0:
        name_day = 'domingo';
        break;
    }
    window.history.replaceState({}, '', `${name_day}`);
    this.shared.setDay(day);
  }
}
