import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-welcome-page-component',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  public pageTitle = 'Welcome';

  constructor() { }

  ngOnInit() {
  }

}
