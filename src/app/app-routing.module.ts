import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {
    path: '',
    component: HeroesComponent
  },
  {
    path: 'details/:name',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
