import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders =  [
    { name: 'Chicken Sandwich', selected: false},
    { name: 'Steak Sandwich', selected: false},
    { name: 'Vegie Pizza', selected: false},
    { name: 'Peperoni Pizza', selected: false},
    { name: 'Pasta Alfredo', selected: false}
       ];

  selectedOrders = [];
  drinks =  [
    { name: 'Pepsi', selected: false},
    { name: 'Pepsi Diet', selected: false},
    { name: '7up', selected: false},
    { name: 'XXL', selected: false}
  ];

  selectedDrinks = [];

  constructor() {
   }

  ngOnInit(): void {
  }


  selectOrder(index: number): void {
    this.orders[index].selected = !this.orders[index].selected;
    this.selectedOrders = this.orders.filter(el => el.selected);
  }

  selectedDrink(index: number): void {
    this.drinks[index].selected = !this.drinks[index].selected;
    this.selectedDrinks = this.drinks.filter(el => el.selected);
  }

}
