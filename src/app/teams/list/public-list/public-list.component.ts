import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PublicTeam } from '../../teams.models';


@Component({
  selector: 'app-public-list',
  templateUrl: './public-list.component.html',
  styleUrls: ['./public-list.component.css']
})
export class PublicListComponent implements OnInit {
  publicTeams: PublicTeam[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.publicTeams = this.route.snapshot.data['publicTeams'];
  }

}
