import { PlaylistInterface } from './playlist.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  playlist: Array<PlaylistInterface> = new Array();
  myPlaylist: Array<PlaylistInterface> = new Array();
  currentSong: {} = {};
  currentIndex: number;

  constructor() { }

  ngOnInit(): void {
    this.initPlaylist();
  }

  initPlaylist() {
    let obj = [
      { id: '1', name: 'Purple Haze', singer: 'Jimi Hendrix', album: 'Woodstock', duration: '240', like: false},
      { id: '2', name: 'New Rules', singer: 'Dua Lipa', album: 'Triller', duration: '210', like: false}
    ];

    obj.forEach(item => {
      this.playlist.push(item);
    });
    this.currentIndex = 0;
    this.currentSong = this.playlist[0];
  }

  createMyPlaylist(e) {
    if(this.myPlaylist.includes(e)) {

    } else {
      this.myPlaylist.push(e);
    }
  }

  onLike(e) {
    if(this.myPlaylist.includes(e)) {

    } else {
      this.myPlaylist.push(e);
    }
  }

  playNext(e) {
    if(this.currentIndex = this.playlist.length) {
      this.currentIndex = 0 ;
    } else {
      this.currentIndex += 1;
    }
    this.currentSong = JSON.parse(JSON.stringify(this.playlist[this.currentIndex]));
  }

  playPrev(e) {
    if(this.currentIndex < this.playlist.length && this.currentIndex > 0) {
      this.currentIndex -= 1;
    } else if(this.currentIndex === 0) {
      this.currentIndex = this.playlist.length;
    } 
    this.currentSong = this.playlist[this.currentIndex - 1];
  }

}
