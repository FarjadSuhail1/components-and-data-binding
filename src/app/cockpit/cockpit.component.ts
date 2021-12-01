import {ElementRef, Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  
  //propertises
  //eventemitter is an object in the angular framework
  // which allows you to emit your own events
 @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
 @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

 // newServerName = '';
  //newServerContent = '';
  
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
  
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
  //console.log(nameInput.value)
   this.serverCreated.emit(
     {
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
     }
    )

    console.log(this.serverContentInput);
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit(
      {
       serverName: nameInput.value,
       serverContent: this.serverContentInput.nativeElement.value
      }
     )
  }

}
