import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  public servers = [
    {
      name: 'Test Server',
      content: 'Test server created!',
      type: 0
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  createServer(server) {
    this.servers.push(server);
  }

}
