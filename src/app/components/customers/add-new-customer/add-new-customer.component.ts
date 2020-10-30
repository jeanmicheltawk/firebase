import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-add-new-customer',
  templateUrl: './add-new-customer.component.html',
  styleUrls: ['./add-new-customer.component.scss']
})
export class AddNewCustomerComponent implements OnInit {

  students: any;
  studentFirstName: string;
  studentLastName: string;
  studentCountry: string;
  studentAddress: string;
  constructor(
    private crudService: CrudService
    ) { }
  ngOnInit(): void {
    this.crudService.read_Students().subscribe(data => {
      this.students = data.map((e: any) => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          FirstName: e.payload.doc.data().FirstName,
          LastName: e.payload.doc.data().LastName,
          Country: e.payload.doc.data().Country,
          Address: e.payload.doc.data().Address,
        };
      });
      console.log(this.students);
    });
  }
  CreateRecord(): void {
    const record = {FirstName: '', LastName: '', Email: '', Country: '' , Address: ''};
    record.FirstName = this.studentFirstName;
    record.LastName = this.studentLastName;
    record.Country = this.studentCountry;
    record.Address = this.studentAddress;
    this.crudService.create_NewStudent(record).then(resp => {
      this.studentFirstName = '';
      this.studentLastName = '';
      this.studentCountry = '';
      this.studentAddress = '';
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
  RemoveRecord(rowID): void {
    this.crudService.delete_Student(rowID);
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
