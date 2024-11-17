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
import { PrayerOneComponent } from './components/prayers/prayer-one/prayer-one.component';
import { PrayerTwoComponent } from './components/prayers/prayer-two/prayer-two.component';
import { PrayerThreeComponent } from './components/prayers/prayer-three/prayer-three.component';
import { GloriousFirstComponent } from './components/mysteries/glorious/first/first.component';
import { GloriousSecondComponent } from './components/mysteries/glorious/second/second.component';
import { GloriousThirdComponent } from './components/mysteries/glorious/third/third.component';
import { GloriousFourthComponent } from './components/mysteries/glorious/fourth/fourth.component';
import { GloriuosFifthComponent } from './components/mysteries/glorious/fifth/fifth.component';
import { JoyFulFirstComponent } from './components/mysteries/joyful/first/first.component';
import { JoyFulSecondComponent } from './components/mysteries/joyful/second/second.component';
import { JoyFulThirdComponent } from './components/mysteries/joyful/third/third.component';
import { JoyFulFourthComponent } from './components/mysteries/joyful/fourth/fourth.component';
import { JoyFulFifthComponent } from './components/mysteries/joyful/fifth/fifth.component';
import { LuminousFirstComponent } from './components/mysteries/luminous/first/first.component';
import { LuminousSecondComponent } from './components/mysteries/luminous/second/second.component';
import { LuminousThirdComponent } from './components/mysteries/luminous/third/third.component';
import { LuminousFourthComponent } from './components/mysteries/luminous/fourth/fourth.component';
import { LuminousFifthComponent } from './components/mysteries/luminous/fifth/fifth.component';
import { SorrowFulFirstComponent } from './components/mysteries/sorrowful/first/first.component';
import { SorrowFulSecondComponent } from './components/mysteries/sorrowful/second/second.component';
import { SorrowFulThirdComponent } from './components/mysteries/sorrowful/third/third.component';
import { SorrowFulFourthComponent } from './components/mysteries/sorrowful/fourth/fourth.component';
import { SorrowFulFifthComponent } from './components/mysteries/sorrowful/fifth/fifth.component';

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
    FridayComponent,
    PrayerOneComponent,
    PrayerTwoComponent,
    PrayerThreeComponent,
    GloriousFirstComponent,
    GloriousSecondComponent,
    GloriousThirdComponent,
    GloriousFourthComponent,
    GloriuosFifthComponent,
    JoyFulFirstComponent,
    JoyFulSecondComponent,
    JoyFulThirdComponent,
    JoyFulFourthComponent,
    JoyFulFifthComponent,
    LuminousFirstComponent,
    LuminousSecondComponent,
    LuminousThirdComponent,
    LuminousFourthComponent,
    LuminousFifthComponent,
    SorrowFulFirstComponent,
    SorrowFulSecondComponent,
    SorrowFulThirdComponent,
    SorrowFulFourthComponent,
    SorrowFulFifthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
