import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Skill } from '../../core/core.models';

import { PrivateTeam } from '../teams.models';
import { TeamsService } from '../teams.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  skills: Skill[];
  teamDetails: PrivateTeam;

  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _teamService: TeamsService) { }

  ngOnInit() {
    this._route.data.subscribe((data: {skills:Skill[]}) => this.skills = data.skills);
    this._route.data.subscribe((data: {teamDetails:PrivateTeam}) => this.teamDetails = data.teamDetails);
  }

  isSkillChosen(skillId:number):boolean {
    return this.teamDetails.technologies.indexOf(skillId) > -1
  }

  addOrRemoveSkill(id:number): void {
    var index = this.teamDetails.technologies.indexOf(id);

    if (index > -1) {
      this.teamDetails.technologies.splice(index, 1);
    } else {
      this.teamDetails.technologies.push(id);
    }
  }

  updateTeam(): void {
    var teamId = this.teamDetails.id;

    this._teamService.editTeam(teamId, this.teamDetails)
                     .subscribe(
                       data => this._handleSuccessfulTeamEdit(data),
                       err => console.log(err));
  }

  private _handleSuccessfulTeamEdit(team: PrivateTeam) {
    this._router.navigate(['teams', team.id]);
  }
}
