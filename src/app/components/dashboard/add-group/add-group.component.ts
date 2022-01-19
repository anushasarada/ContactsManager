import { Component, OnInit } from '@angular/core'; 
import { Group } from 'src/app/models/group/group.model';
import { GroupService } from 'src/app/services/group/group.service';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {

  group: Group = {
    title: '',
    active: true
  };
  submitted = false;

  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
  }

  saveGroup(): void {
    const data = {
      title: this.group.title,
      active: this.group.active
    };

    this.groupService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newGroup(): void {
    this.submitted = false;
    this.group = {
      title: '',
      active: true
    };
  }

}
