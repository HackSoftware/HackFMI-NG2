import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Skill } from '../../core/core.models';

import { TeamsService } from '../teams.service';
import { PrivateTeam } from '../teams.models';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  skills: Skill[];

  teamInfo = {
    name: '',
    idea_description: '',
    repository: '',
    need_more_members: true,
    members_needed_desc: '',
    technologies: [],
  }

  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _teamService: TeamsService) { }

  ngOnInit() {this._route.data.subscribe((data: {skills:Skill[]}) => this.skills = data.skills);}

  addOrRemoveSkill(id:number): void {
    var index = this.teamInfo.technologies.indexOf(id);

    if (index > -1) {
      this.teamInfo.technologies.splice(index, 1);
    } else {
      this.teamInfo.technologies.push(id);
    }
  }

  createTeam(): void {
    this._teamService.createTeam(this.teamInfo)
                     .subscribe(
                       data => this._handleSuccessfulTeamCreation(data),
                       err => console.log(err));
  }

  private _handleSuccessfulTeamCreation(team: PrivateTeam) {
    this._router.navigate(['teams', team.id]);
  }
}