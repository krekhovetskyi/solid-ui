import { Component } from '@angular/core';


@Component({
  selector: 'sol-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string;

  constructor() {
    this.title = 'Select an option :'
  }

  showHideSideClocked() {

  }
}
