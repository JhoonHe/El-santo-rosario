import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private shared: SharedService) { }

  date: any;
  day: any;

  ngOnInit(): void {
    this.date = new Date();
    this.day = this.date.getDay();

    this.shared.getDay().subscribe((day) => {
      if (day !== null) this.day = day;
    });

    this.redirect(this.day);
  }

  ngOnDestroy(): void {
    this.shared.setDay(null);
  }

  redirect = (value: any) => {
    switch (value) {
      case 1:
        this.router.navigate(['lunes']);
        break;
      case 2:
        this.router.navigate(['martes']);
        break;
      case 3:
        this.router.navigate(['miercoles']);
        break;
      case 4:
        this.router.navigate(['jueves']);
        break;
      case 5:
        this.router.navigate(['viernes']);
        break;
      case 6:
        this.router.navigate(['sabado']);
        break;
      case 0:
        this.router.navigate(['domingo']);
        break;
    }
  }

}
