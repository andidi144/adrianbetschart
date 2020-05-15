import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WritingService {

    stringsToType;
    whereToWrite;

    typingSpeed = 100;
    typingSpeedSpread = 5;
    writingDelay = 1000;

    deletingSpeed = 100;
    deletingSpeedSpread = 5;
    deletingDelay = 2000;


    counter = 0;

    constructor(
        stringsToType: Array<String>, 
        whereToWrite: Object, 
        @Inject(Number) typingSpeed: number,
        @Inject(Number) typingSpeedSpread: number,
        @Inject(Number) writingDelay: number,
        @Inject(Number) deletingDelay: number,
        @Inject(Number) deletingSpeed: number,
        @Inject(Number) deletingSpeedSpread: number,
    ) {
        this.stringsToType = stringsToType;
        this.whereToWrite = whereToWrite;
        this.typingSpeed = typingSpeed;
        this.typingSpeedSpread = typingSpeedSpread;
        this.writingDelay = writingDelay;
        this.deletingDelay = deletingDelay;
        this.deletingSpeed = deletingSpeed;
        this.deletingSpeedSpread = deletingSpeedSpread;
    }

    startWriting() {
        console.log(this.typingSpeed + ' ' + this.typingSpeedSpread);
        if (this.stringsToType[this.counter].length > 0) {
            this.whereToWrite.value += this.stringsToType[this.counter].substring(0, 1);
            this.stringsToType[this.counter] = this.stringsToType[this.counter].substring(1, this.stringsToType[this.counter].length);
            setTimeout(() => {
                this.startWriting();
            }, this.randomInt(this.typingSpeed - this.typingSpeedSpread, this.typingSpeed + this.typingSpeedSpread));
        }
        else if (this.stringsToType.length - 1 > this.counter) {
            this.counter++;

            setTimeout(() => {
                this.deleteText();
            }, this.deletingDelay);
        } 
    }

    deleteText() {
        if (this.whereToWrite.value.length > 0) {
            this.whereToWrite.value = this.whereToWrite.value.substring(0, this.whereToWrite.value.length - 1);

            setTimeout(() => {
                this.deleteText();
            }, this.randomInt(this.deletingSpeed - this.deletingSpeedSpread, this.deletingSpeed + this.deletingSpeedSpread));
        }
        else {
            setTimeout(() => {
                this.startWriting();
            }, this.writingDelay);
        }
    }


    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
  
}
