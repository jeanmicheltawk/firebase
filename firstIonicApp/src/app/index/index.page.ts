import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  students: any;

  constructor(
    private router: Router,
    private crudService: CrudService,
    private zone: NgZone

  ) { }

  ngOnInit(): void {
    this.crudService.read_Students().subscribe(data => {
      this.students = data.map((e: any) => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          itemName: e.payload.doc.data().itemName,
          itemPrice: e.payload.doc.data().itemPrice,
          itemLocation: e.payload.doc.data().itemLocation,
          itemQty: e.payload.doc.data().itemQty,
        };
      });
      console.log(this.students);
    });
  }

  goToAddUser(){
    this.router.navigateByUrl('/add-user');
  }
  EditRecord(record): void {
    record.isEdit = true;
    record.EditFirstName = record.FirstName;
    record.EditLastName = record.LastName;
    record.EditCountry = record.Country;
    record.EditAddress = record.Address;
  }
  UpdateRecord(recordRow): void {
    const record = {FirstName: '', LastName: '', Country: '', Address: ''};
    record.FirstName = recordRow.EditFirstName;
    record.LastName = recordRow.EditLastName;
    record.Country = recordRow.EditCountry;
    record.Address = recordRow.EditAddress;
    this.crudService.update_Student(recordRow.id, record);
    recordRow.isEdit = false;
  }
}
