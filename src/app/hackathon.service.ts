import { Component, OnInit, Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { Headers, Http } from '@angular/http';

@Injectable()
export class HackathonService {

  constructor(private http: Http) { }

  sub: Subscription;
  public count = 0;
  public change: Boolean = false;
  public finish: Boolean = true;
  public score: Boolean = false;
  public ticks = 0;
  public minutesDisplay = 0;
  public hoursDisplay = 0;
  public secondsDisplay = 0;
  colors;
  Url = 'http://172.23.238.209:8080/hackathon';
  private headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json',
  'Access-Control-Allow-Origin' : 'http://localhost:4200', 'Access-Control-Allow-Credentials': 'true'});

  // tslint:disable-next-line:one-line
  create(name, emailId, projectId, location, gitURL, score){

    console.log('Submitting json', JSON.stringify({name: name, emailId: emailId,
      projectId: projectId, location: location, gitURL: gitURL}));

      const j = JSON.stringify({name: name, emailId: emailId,
        projectId: projectId, location: location, gitURL: gitURL});
        this.http
        .post('http://172.23.238.209:8080/hackathon', j, {headers: this.headers}).toPromise().catch(this.handleError);

  }

  createModel(model) {
    console.log('Submitting model', JSON.stringify(model));
    return this.http
    .post(this.Url, JSON.stringify(model), { headers: this.headers }).toPromise().catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error); // for demo purposes only
  }
  shuffle(array: any): void {
    if (this.finish) {
      let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

     // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;


    }
    console.log(array);
    return array; }
  }

  onClickTimer() {
      if ((this.count) ===  0) {
        this.score = true;
        this.startTimer(); }

     (this.count)  = (this.count) + 1;
      console.log(this.count);
    }
  startTimer() {
      const timer = Observable.timer(1, 500);
      this.sub = timer.subscribe(
          t => {
              this.ticks = t;
              console.log(this.ticks);

              this.colors = this.shuffle(['white', '#acacac', '#e3e3e3', '#5a5a5a']);
              if ((this.ticks) <= 180) {
                console.log(this.secondsDisplay);
                this.minutesDisplay = this.getMinutes(this.ticks);
                this.secondsDisplay = (this.getMinutes(this.ticks) * 30) + Math.round(this.getSeconds(this.ticks) / 2);
                this.hoursDisplay = this.getHours(this.ticks);
              // tslint:disable-next-line:one-line
              } else{
                this.finish = false;
                this.score = false;
                console.log(this.finish);
                this.change = true;
                this.sub.unsubscribe();
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
