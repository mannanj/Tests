import { Injectable } from '@angular/core';
import {CountchangesService} from './countchanges.service';

@Injectable()
export class UserService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  constructor(private countService: CountchangesService) {}
  setActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.countService.doCount();
  }
  setInactive(id: number) {
    this.inactiveUsers.push(this.inactiveUsers[id]);
    this.activeUsers.splice(id, 1);
    this.countService.doCount();
  }
}
