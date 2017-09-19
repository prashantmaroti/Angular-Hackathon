import { Component, OnInit,Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Injectable()
export class HackathonService {

  constructor() { }

  sub: Subscription;
  
   count = 0;
   change: Boolean = false;
   finish: Boolean = true;
   
  shuffle(array:any):void {
    if(this.finish){
      var currentIndex = array.length, temporaryValue, randomIndex;
    
    while (0 !== currentIndex) { 

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
     // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;

      
    }
    console.log(array);
    return array;}
  }
  ticks = 0;
  
  minutesDisplay: number = 0;
  hoursDisplay: number = 0;
  secondsDisplay: number = 0;

  private onClickTimer() {
      if ((this.count) ===  0) {this.startTimer();}
  
     (this.count)  = (this.count) + 1;
      console.log(this.count);
    }
  private startTimer() {

      let timer = Observable.timer(1, 1000);
      this.sub = timer.subscribe(
          t => {
              this.ticks = t;
              
              
              console.log(this.ticks);
              if ((this.ticks) <= 3) {
                this.secondsDisplay = this.getSeconds(this.ticks);
                this.minutesDisplay = this.getMinutes(this.ticks);
                this.hoursDisplay = this.getHours(this.ticks);}
               else{ 
                this.finish = false;
                console.log(this.finish);
                this.change = true;
              }
          }
      );
  }

  private getSeconds(ticks: number) {
      return this.pad(ticks % 60);
  }

  private getMinutes(ticks: number) {
       return this.pad((Math.floor(ticks / 60)) % 60);
  }

  private getHours(ticks: number) {
      return this.pad(Math.floor((ticks / 60) / 60));
  }

  private pad(digit: any) { 
      return digit <= 9 ? '0' + digit : digit;
  }

}
