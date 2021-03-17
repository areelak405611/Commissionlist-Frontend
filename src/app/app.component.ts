import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CSAng';

  check = localStorage.getItem('status_reload');

  isLogin() {
    if (this.check === '1') {
      localStorage.setItem('status_reload','0')
      return true;
    } else {
      return false;
    }
  }
}
