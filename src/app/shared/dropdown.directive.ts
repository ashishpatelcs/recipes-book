import { Directive, OnInit, ElementRef, Renderer2, OnChanges, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') openDropdown = false;

  @HostListener('click') toggleOpen() {
    this.openDropdown = !this.openDropdown;
  }

}
