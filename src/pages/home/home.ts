import { Component } from '@angular/core';
import { AudioProvider } from 'ionic-audio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myTracks: any[];
  singleTrack: any;
  allTracks: any[];
  selectedTrack: number;

  constructor(private _audioProvider: AudioProvider) {
    this.myTracks = [{
      src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t12-MP3-V0.mp3',
      artist: 'John Mayer',
      title: 'Why Georgia',
      art: 'assets/img/johnmayer.jpg',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    },
    {
      src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t30-MP3-V0.mp3',
      artist: 'John Mayer',
      title: 'Who Says',
      art: 'assets/img/johnmayer.jpg',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
    }];
  }

ngAfterContentInit()
    {     
      // get all tracks managed by AudioProvider so we can control playback via the API
      this.allTracks = this._audioProvider.tracks; 
    }
  

    playSelectedTrack() 
    {
      // use AudioProvider to control selected track 
      this._audioProvider.play(this.selectedTrack);
    }
  
    pauseSelectedTrack() 
    {
       // use AudioProvider to control selected track 
       this._audioProvider.pause(this.selectedTrack);
    }
         
    onTrackFinished(track: any) 
    {
      console.log('Track finished', track)
    }

}
