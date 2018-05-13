import { Component, DoCheck, OnInit } from '@angular/core';

import SpeechToText from 'speech-to-text';

import { DialogueFlowService } from './service/dialogue-flow.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  onAnythingSaid: any;
  onFinalised: any;
  myFinalText: string;
  myResponse: any;
  constructor(private dialogueFlowService: DialogueFlowService) {
    this.onAnythingSaid = text => console.log(`Interim text: ${text}`);
    this.onFinalised = text => { this.myFinalText = `${text}` };

    try {
      const listener = new SpeechToText(this.onAnythingSaid, this.onFinalised);
      listener.startListening();
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit() {
    console.log('1 : ' + this.onFinalised);
  }

  callDialogueFlow() {
    if (this.myFinalText !== null && this.myFinalText !== undefined && this.myFinalText !== 'undefined') {
      this.dialogueFlowService.getResponse(this.onFinalised).subscribe(
        (response) => {
          this.myResponse = response.result.fulfillment.speech;
          console.log(this.myResponse);
        },
        (error) => {
          console.log(error);
        })
    }
  }
}
