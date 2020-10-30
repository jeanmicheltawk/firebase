import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  getItems(): any {
    throw new Error('Method not implemented.');
  }
  Submit(): any {
    throw new Error('Method not implemented.');
  }
  constructor(
    private firestore: AngularFirestore
  ) { }
  // tslint:disable-next-line: typedef
  create_NewStudent(record) {
    return this.firestore.collection('Students').add(record);
  }
  // tslint:disable-next-line: typedef
  read_Students() {
    return this.firestore.collection('Students').snapshotChanges();
  }
  // tslint:disable-next-line: typedef
  update_Student(recordID,record){
    this.firestore.doc('Students/' + recordID).update(record);
  }
  // tslint:disable-next-line: typedef
  // tslint:disable-next-line: variable-name
  // tslint:disable-next-line: typedef
  delete_Student(record_id) {
    this.firestore.doc('Students/' + record_id).delete();
  }
}
