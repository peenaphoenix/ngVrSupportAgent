import { Component } from '@angular/core';

import SpeechToText from 'speech-to-text';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor() {
    const onAnythingSaid = text => console.log(`Interim text: ${text}`);
    const onFinalised = text => console.log(`Finalised text: ${text}`);

    try {
      const listener = new SpeechToText(onAnythingSaid, onFinalised);
      listener.startListening();
    } catch (error) {
      console.log(error);
    }
  }
}
