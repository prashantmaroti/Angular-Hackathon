import { HackathonService } from './../hackathon.service';
import { Submit } from './../submit';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private hackathon: HackathonService) { }
  score = 0;
  model: Submit = new Submit();
  ngOnInit() {
  }
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
