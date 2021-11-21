import { Component, OnInit , Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  @Input() id : number;
  @Input() name : string;
  @Input() user : any; 

  constructor(private routes : ActivatedRoute) { }

  ngOnInit() {}

}
