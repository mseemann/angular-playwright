import { Component } from '@angular/core';

@Component({
  selector: 'apw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'apw';
  showText = false;

  userDidClickButton() {
    this.showText = !this.showText
  }
}
