import { HttpClient , HttpHandler } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';
import { ApiRest } from '../services/api-rest';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  users : any;
  listUsers : any;
  listAddressUsers = [];


  constructor(private httpClient : HttpClient , private api : ApiRest) {}

  ngOnInit(){ 
    this.listUsers = this.api.getUsers();
    this.api.getTodo();

  }
}
