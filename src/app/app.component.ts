import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inspire';
  message = 'Hello World!';

  constructor() {
    this.title = 'inspire me';
  }
}
