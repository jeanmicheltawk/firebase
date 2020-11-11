import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {
  students: any;
  itemName: string;
  itemPrice: string;
  itemLocation: string;
  itemQty: string;
  constructor(
    private router: Router,
    private crudService: CrudService
  ) { }

  ngOnInit() {
  }
goToHome(){
  this.router.navigateByUrl('/index');
}
CreateRecord(): void {
  const record = {itemName: '', itemPrice: '', itemLocation: '', itemQty: '' };
  record.itemName = this.itemName;
  record.itemPrice = this.itemPrice;
  record.itemLocation = this.itemLocation;
  record.itemQty = this.itemQty;
  this.crudService.create_NewStudent(record).then(resp => {
    this.itemName = '';
    this.itemPrice = '';
    this.itemLocation = '';
    this.itemQty = '';
    console.log(resp);
  })
    .catch(error => {
      console.log(error);
    });
}
}
