import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact/contact.model';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts?: Contact[];
  currentContact: Contact = {};
  currentIndex = -1;
  firstname = '';
  pageSlice = []

  constructor(private contactService: ContactService){}

  ngOnInit(): void {
    this.retrieveContacts();
  }

  retrieveContacts(): void{
    this.contactService.getAll().subscribe({
      next: (data) => {
        this.contacts = data;
        this.pageSlice = data.slice(0,5);
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
        this.contacts = data;
        this.pageSlice = data.slice(0,5);
      },
      error: (e) => console.error(e)
    });
  }

  OnPageChange(event: PageEvent){
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.contacts.length){
      endIndex = this.contacts.length;
    }
    this.pageSlice = this.contacts.slice(startIndex, endIndex)
  }

}
