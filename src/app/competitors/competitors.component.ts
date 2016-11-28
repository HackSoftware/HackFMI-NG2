import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CompetitorInfoForList } from '../core/core.models';


@Component({
  selector: 'app-competitors',
  templateUrl: './competitors.component.html',
  styleUrls: ['./competitors.component.css']
})
export class CompetitorsComponent implements OnInit {
  competitors: CompetitorInfoForList[];

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {this._route.data.subscribe((data:{competitors: CompetitorInfoForList[]}) => this.competitors = data.competitors);}
}
