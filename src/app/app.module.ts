import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MondayComponent } from './components/days/monday/monday.component';
import { TuesdayComponent } from './components/days/tuesday/tuesday.component';
import { WednesdayComponent } from './components/days/wednesday/wednesday.component';
import { ThursdayComponent } from './components/days/thursday/thursday.component';
import { SaturdayComponent } from './components/days/saturday/saturday.component';
import { SundayComponent } from './components/days/sunday/sunday.component';
import { FridayComponent } from './components/days/friday/friday.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MondayComponent,
    TuesdayComponent,
    WednesdayComponent,
    ThursdayComponent,
    SaturdayComponent,
    SundayComponent,
    FridayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
