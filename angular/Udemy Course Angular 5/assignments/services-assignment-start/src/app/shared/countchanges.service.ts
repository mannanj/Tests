import { Injectable } from '@angular/core';

@Injectable()
export class CountchangesService {
  count = 0;
  doCount() {
    this.count = this.count + 1;
    console.log('count: ' + this.count);
  }
}
