import { Component, OnInit } from '@angular/core';
import { ApiRest } from '../services/api-rest';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  userInfo:any;
  userTodo:any;

  id : number;
  name : string;
  username:string;
  email : string;
  phone: string;
  city: string;
  street: string;
  suite: string;
  constructor(private api : ApiRest , private routes : ActivatedRoute) { }

  ngOnInit() {
    this.userInfo = this.api.listUsers;
    this.id = this.routes.snapshot.params['id']; 
    this.id = this.userInfo[this.id-1].id;
    this.name = this.userInfo[this.id-1].name;
    this.username = this.userInfo[this.id-1].username;
    this.email = this.userInfo[this.id-1].email;
    this.phone = this.userInfo[this.id-1].phone;
    this.city = this.userInfo[this.id-1]['address'].city;
    this.street = this.userInfo[this.id-1]['address'].street;
    this.suite = this.userInfo[this.id-1]['address'].suite;

    this.userTodo = this.api.listTodo;
  }
  getColor(completed)
  {
    if(completed == true)
      return "green";
    else
      return "red";
  }
}
