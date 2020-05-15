import { Component, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import { WritingService } from '../writing.service';
import { stringify } from 'querystring';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

    welcomeInput = {
        value: ''
    };

    martialartsLink = {
        value: ''
    };


    linksVisible = false;
    stringToType = '';
    counter = 0;
    strangersName = '';

    writingService: WritingService;

    @ViewChild('box') box: ElementRef;
    constructor() {
        
    }

    ngOnInit(): void {
        setTimeout(() => this.box.nativeElement.focus());

        this.writingService = new WritingService(['Hello, my name is Adrian.', 'What is your name? '], this.welcomeInput, 70, 50, 1000, 2000, 70, 50);
        this.writingService.startWriting();
    }

    onEnter(text: string) {
        this.strangersName = text.substring(19, text.length);
        console.log(this.strangersName);

        this.writingService.deleteText();

        this.writingService = new WritingService(['Hi ' + this.strangersName + '.', 'What do you want to know about me?'], this.welcomeInput, 70, 50, 1000, 70, 50, 2000);

        setTimeout(() =>  this.writingService.startWriting(), 2000);

        this.linksVisible = true;
    }

}
