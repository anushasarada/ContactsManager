import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: any

  constructor() {
    this.contacts = [
      {
        "id": 4287,
        "name":"Alisha",
        "email":"alisha@gmail.com",
        "status":"active"
      },
      {
        "id": 4288,
        "name":"Alex",
        "email":"alex@gmail.com",
        "status":"active"
      },
      {
        "id": 4289,
        "name":"Maxwell",
        "email":"maxwell@gmail.com",
        "status":"inactive"
      },
      {
        "id": 4290,
        "name":"Christina",
        "email":"christina@gmail.com",
        "status":"active"
      }
    ]
   }

  ngOnInit() {
  }

}
