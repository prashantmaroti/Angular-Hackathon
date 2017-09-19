import { Submit } from './submit';
import { FormsModule } from '@angular/forms';
import { Observable, Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { HackathonService } from './hackathon.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  sub: Subscription;
  constructor(private hackathon: HackathonService) {}
  score = 0;
  public ticks = 0;
  model: Submit = new Submit();
  ngOnInit() {
    this.hackathon.colors = this.hackathon.shuffle(['white', '#acacac', '#e3e3e3', '#5a5a5a']);
    console.log(this.hackathon.colors);
  }
  onClick(color) {
    if (color === 'white' && this.hackathon.finish && this.hackathon.score) {
      this.score++;
    }
    console.log(this.score);
  }
  // tslint:disable-next-line:one-line
  onSubmit(name, email, id, city, git){
    this.model.name = name;
    this.model.emailId = email;
    this.model.projectId = id;
    this.model.location = city;
    this.model.gitURL = git;
    console.log('Model', this.model);
    this.hackathon.create(name, email, id, city, git, this.score);
  }
}



