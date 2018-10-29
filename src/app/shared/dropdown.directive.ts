import { Directive, Input, OnInit, ElementRef, Renderer2, OnChanges } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit, OnChanges {
  @Input() openDropdown = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.openDropdown) {
      this.renderer.addClass(this.elementRef.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    }
  }

}
