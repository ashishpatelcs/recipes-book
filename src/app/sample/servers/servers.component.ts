import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('serverElement') server: {name: string, content: string, type: number};

  constructor() { }

  ngOnInit() {
  }

  time() {
    return Date.now();
  }

}
