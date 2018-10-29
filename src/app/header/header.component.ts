import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public open = false;
  @Output() navlinkChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  navChanged(nav: string) {
    this.navlinkChanged.emit(nav);
  }

  onClick() {
    this.open = !(this.open);
  }

}
