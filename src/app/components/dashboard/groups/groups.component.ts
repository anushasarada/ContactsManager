import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Group } from 'src/app/models/group/group.model';
import { GroupService } from 'src/app/services/group/group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
}) 
export class GroupsComponent implements OnInit {

  groups?: Group[];
  currentGroup: Group = {};
  currentIndex = -1;
  title = '';
  pageSlice = []

  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    this.retrieveGroups();
  }

  retrieveGroups(): void{
    this.groupService.getAll().subscribe({
      next: (data) => {
        this.groups = data;
        this.pageSlice = data.slice(0,5);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void{
    this.retrieveGroups();
    this.currentGroup = {};
    this.currentIndex = -1;
  }

  setActiveGroup(group: Group, index: number): void{
    this.currentGroup = group;
    this.currentIndex = index;
  }

  removeAllGroups(): void{
    this.groupService.deleteAll().subscribe({
      next: (res) => {
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchName(): void{
    this.currentGroup = {};
    this.currentIndex = -1;
    this.groupService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.groups = data;
        this.pageSlice = data.slice(0,5);
      },
      error: (e) => console.error(e)
    });
  }

  OnPageChange(event: PageEvent){
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.groups.length){
      endIndex = this.groups.length;
    }
    this.pageSlice = this.groups.slice(startIndex, endIndex)
  }
}
