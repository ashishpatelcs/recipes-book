import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  public serverName: string;
  @ViewChild('serverContent') serverContent: ElementRef;
  @Output() serverCreated = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverName: HTMLInputElement) {
    this.serverCreated.emit({
      name: serverName.value,
      content: this.serverContent.nativeElement.value,
      type: 0
    });
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.serverCreated.emit({
      name: serverName.value,
      content: this.serverContent.nativeElement.value,
      type: 1
    });
  }

}
