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

  onAddServer(serverName: HTMLInputElement) {
    this.serverCreated.emit({
      name: serverName.value,
      content: this.serverContent,
      type: 0
    });
    serverName.value = '';
    this.serverContent = '';
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.serverCreated.emit({
      name: serverName.value,
      content: this.serverContent,
      type: 1
    });
    serverName.value = '';
    this.serverContent = '';
  }

}
