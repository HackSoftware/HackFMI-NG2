import { Component, OnInit } from '@angular/core';


import { MentorsService } from './mentors.service';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.css']
})
export class MentorsComponent implements OnInit {
  members: any;  // Fix type when data is being fetched

  constructor(private _mentorsService: MentorsService) { }

  ngOnInit() { this.getMentors(); }

  getMentors():void {
    this._mentorsService.getMentors()
                        .subscribe(
                          data => this._handleMembersData(data),
                          err => console.log(err));  // TODO: Handle error
  }

  private _handleMembersData(data:any) {
    console.log(data);
    this.members = data;
  }

}
