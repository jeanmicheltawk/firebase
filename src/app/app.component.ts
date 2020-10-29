
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bigApp';

constructor(
  private router: Router
) {

}
  gotoabout(): void {
    this.router.navigate(['About']);
  }
}
