import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showRecipes = true;
  showShopping = false;

  setPage(show: {type: string}) {
    console.log('received emitted event', show.type);
    if (show.type === 'recipes') {
      this.showRecipes = true;
      this.showShopping = false;
    }else {
      this.showShopping = true;
      this.showRecipes = false;
    }
  }

}
