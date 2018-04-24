import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  pageType = 'recipes';
  openMenu = false;
  @Output() emitPage = new EventEmitter<{type: string}>();

  togglePage(type: string) {
    this.pageType = type;
    this.emitPage.emit({
      type: this.pageType
    });
  }
}
