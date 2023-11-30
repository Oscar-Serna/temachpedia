import {Component} from '@angular/core';
import {Lyric} from "../model/Lyric";
import {LyricsService} from "../services/lyrics.service";

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent {
  lyrics: Lyric[] = [];


  constructor(lyricsService: LyricsService) {
    this.lyrics = lyricsService.lyrics;
  }
}
