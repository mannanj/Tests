import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  constructor(
    private serversService: ServersService,
    // private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('queryParams: ', this.route.snapshot.queryParams);
    console.log('fragment: ', this.route.snapshot.fragment);
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

  reload() {
    // this.router.navigate( // does not normally know the directory where this  resides, unlike routerLink directive
    //   ['servers'],
    //   {relativeTo: this.route});
  }
}
