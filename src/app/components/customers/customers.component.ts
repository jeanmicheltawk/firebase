import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  elements = document.getElementsByClassName('column');


  constructor() {}

  ngOnInit(): void {}

  listView(): void {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < Element.length; i++) {
      Element[i].style.width = '100%';
    }
  }

  gridView(): void {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < Element.length; i++) {
      Element[i].style.width = '50%';
    }
  }
}
