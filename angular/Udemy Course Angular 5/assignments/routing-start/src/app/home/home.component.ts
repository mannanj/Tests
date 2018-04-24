import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loadServers(id: number) {
    console.log("ID", id)
    // some logic here
    this.router.navigate(['/servers', id], {queryParams: {allowEdit: 0, skeleton: 1}, fragment: 'loading'});
  }

}
