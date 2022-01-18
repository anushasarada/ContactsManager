import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groups: any

  constructor() {
    this.groups = [
      {
        "id": 4387,
        "name":"Group One",
        "numContacts":12,
        "status":"active"
      },
      {
        "id": 4388,
        "name":"Group Two",
        "numContacts":15,
        "status":"active"
      },
      {
        "id": 4389,
        "name":"Group Three",
        "numContacts":8,
        "status":"inactive"
      },
      {
        "id": 4390,
        "name":"Group Four",
        "numContacts":20,
        "status":"active"
      },{
        "id": 4387,
        "name":"Group One",
        "numContacts":12,
        "status":"active"
      },
      {
        "id": 4388,
        "name":"Group Two",
        "numContacts":15,
        "status":"active"
      },
      {
        "id": 4389,
        "name":"Group Three",
        "numContacts":8,
        "status":"inactive"
      },
      {
        "id": 4390,
        "name":"Group Four",
        "numContacts":20,
        "status":"active"
      },{
        "id": 4387,
        "name":"Group One",
        "numContacts":12,
        "status":"active"
      },
      {
        "id": 4388,
        "name":"Group Two",
        "numContacts":15,
        "status":"active"
      },
      {
        "id": 4389,
        "name":"Group Three",
        "numContacts":8,
        "status":"inactive"
      },
      {
        "id": 4390,
        "name":"Group Four",
        "numContacts":20,
        "status":"active"
      },{
        "id": 4387,
        "name":"Group One",
        "numContacts":12,
        "status":"active"
      },
      {
        "id": 4388,
        "name":"Group Two",
        "numContacts":15,
        "status":"active"
      },
      {
        "id": 4389,
        "name":"Group Three",
        "numContacts":8,
        "status":"inactive"
      },
      {
        "id": 4390,
        "name":"Group Four",
        "numContacts":20,
        "status":"active"
      }
    ]
   }

  ngOnInit() {
  }

}
