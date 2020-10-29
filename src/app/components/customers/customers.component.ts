import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  elements = document.getElementsByClassName('column');
  // Declare a loop variable

  constructor() { }

  ngOnInit(): void {
  }

  // List View
   listView(): void {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < Element.length; i++) {
      Element[i].style.width = '100%';
    }
  }

  // Grid View
   gridView(): void {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < Element.length; i++) {
      Element[i].style.width = '50%';
    }
    }
  }



