import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact/contact.model';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  //contacts: any

  contacts?: Contact[];
  currentContact: Contact = {};
  currentIndex = -1;
  firstname = '';

  constructor(private contactService: ContactService){}

  ngOnInit(): void {
    this.retrieveContacts();
  }

  retrieveContacts(): void{
    this.contactService.getAll().subscribe({
      next: (data) => {
        this.contacts = data;
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void{
    this.retrieveContacts();
    this.currentContact = {};
    this.currentIndex = -1;
  }

  setActiveContact(contact: Contact, index: number): void{
    this.currentContact = contact;
    this.currentIndex = index;
  }

  removeAllContacts(): void{
    this.contactService.deleteAll().subscribe({
      next: (res) => {
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchName(): void{
    this.currentContact = {};
    this.currentIndex = -1;
    console.log("Attempted Search")
    this.contactService.findByName(this.firstname).subscribe({
      next: (data) => {
        console.log(this.firstname, data)
        this.contacts = data;
      },
      error: (e) => console.error(e)
    });
  }

}
