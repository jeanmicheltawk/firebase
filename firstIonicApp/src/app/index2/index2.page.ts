import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-index2',
  templateUrl: './index2.page.html',
  styleUrls: ['./index2.page.scss'],
})
export class Index2Page implements OnInit {

  constructor(
    private router: Router,
    private crudService: CrudService,
    private zone: NgZone
    ) { }

  ngOnInit() {
  }
  goToAddUser(){
    this.router.navigateByUrl('/add-user');
  }
}
