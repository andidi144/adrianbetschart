import { Component, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import { stringify } from 'querystring';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

    boxvalue = '';
    stringToType = '';
    counter = 0;
    strangersName = '';

    @ViewChild('box') box: ElementRef;
    constructor() {
    }

    ngOnInit(): void {
        setTimeout(() => this.box.nativeElement.focus());

        setTimeout(() => this.typeText('Hello, my name is Adrian.'), 1000);

        setTimeout(() => this.deleteText(), 5000);

        setTimeout(() => this.typeText('What is your name? '), 8000);

    }

    showTextbox() {
        console.log('Working');
    }

    onEnter(text: string) {
        this.strangersName = text.substring(19, text.length);
        console.log(this.strangersName);
        setTimeout(() => this.deleteText(), 500);
        setTimeout(() => this.typeText('Hi ' + this.strangersName), 5500);

        setTimeout(() => this.deleteText(), 7500);

        setTimeout(() => this.typeText('What do you want to know about me?'), 9500);

    }

    typeText(text: string) {
        this.stringToType = text;
        if (stringify.length > 0) {
            this.boxvalue += text.substring(this.counter, this.counter + 1);
            this.stringToType = this.stringToType.substring(1, this.stringToType.length);
            setTimeout(() => {
                this.typeText(this.stringToType);
            }, Math.floor(Math.random() * 50) + 50);
        }
    }

    deleteText() {
        if (this.boxvalue.length > 0) {
            this.boxvalue = this.boxvalue.substring(0, this.boxvalue.length - 1);

            setTimeout(() => {
                this.deleteText();
            }, Math.floor(Math.random() * 50) + 50);
        }
    }
}
