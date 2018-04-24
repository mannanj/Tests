import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') toggleStyle = false;
  constructor() { }
  @HostListener('click') toggleOpen() {
    this.toggleStyle = !this.toggleStyle;
  }
}
