import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-player-actions',
  templateUrl: './player-actions.component.html',
  styleUrls: ['./player-actions.component.scss']
})
export class PlayerActionsComponent implements OnInit {

  @Output() next = new EventEmitter();
  @Output() prev = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  prevTrack() {
    this.prev.emit(true);
  }

  nextTrack() {
    this.next.emit(true);
  }
}
