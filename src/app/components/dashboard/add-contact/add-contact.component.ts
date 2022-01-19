import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact/contact.model';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact: Contact = {
    firstname: '',
    lastname: '',
    phone: 0,
    email: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    country: '',
    zipcode: 0,
    active: true,
    grouptitle: 'jkdbfksdf'
  };
  submitted = false;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  saveContact(): void {
    const data = {
      firstname: this.contact.firstname,
      lastname: this.contact.lastname, 
      phone: this.contact.phone,
      email: this.contact.email,
      address1: this.contact.address1,
      address2: this.contact.address2,
      city: this.contact.city, 
      state: this.contact.state, 
      country: this.contact.country, 
      zipcode: this.contact.zipcode,
      active: this.contact.active,
      grouptitle: this.contact.grouptitle && this.contact.grouptitle.length>0 ? this.contact.grouptitle : 'kjkajbfkae' 
    };
    console.log("New Contact data from UI")
    console.log(data)

    this.contactService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newContact(): void {
    this.submitted = false;
    this.contact = {
      firstname: '',
      lastname: '',
      phone: 0,
      email: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      country: '',
      zipcode: 0,
      active: true,
      grouptitle: 'nvldng'
    };
  }
}