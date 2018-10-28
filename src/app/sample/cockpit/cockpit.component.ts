import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  public serverName: string;
  public serverContent: string;
  @Output() serverCreated = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit({
      name: this.serverName,
      content: this.serverContent,
      type: 0
    });
    this.serverName = '';
    this.serverContent = '';
  }

  onAddBlueprint() {
    this.serverCreated.emit({
      name: this.serverName,
      content: this.serverContent,
      type: 1
    });
    this.serverName = '';
    this.serverContent = '';
  }

}
