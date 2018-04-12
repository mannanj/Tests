import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent }   from './home/home.component';
import { HeroDetailComponent }   from './hero-detail/hero-detail.component';


// Array of routes to components
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ], // Tells Router to look for changes in the browser location // forRoot performs initial navigation based on current URL and also supplies the necessary service providers and directives for routing
  exports: [ RouterModule ] // Makes directives available to AppModule (component?) and it's children
})
export class AppRoutingModule { }
