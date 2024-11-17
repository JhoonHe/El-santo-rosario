import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';
import { MondayComponent } from './components/days/monday/monday.component';
import { SundayComponent } from './components/days/sunday/sunday.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':day', component: HomeComponent },
  // { path: '', component: MondayComponent },
  // { path: 'sunday', component: SundayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
