import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-welcome-page-component',
  templateUrl: './welcome-page-component.component.html',
  styleUrls: ['./welcome-page-component.component.css']
})
export class WelcomePageComponentComponent implements OnInit {

  public pageTitle = 'Welcome';

  constructor() { }

  ngOnInit() {
  }

}
