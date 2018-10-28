import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  public serverName: string;
  public serverContent: string;

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    // const server = { name: this.serverName, content: this.serverContent, type: 0 };
    // this.servers.push(server);
  }

  onAddBlueprint() {
    // const server = { name: this.serverName, content: this.serverContent, type: 1 };
    // this.servers.push(server);
  }

}
