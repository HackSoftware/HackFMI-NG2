import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Season } from './home.models';
import { HomeService } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  season: Season;

  constructor(private _homeService: HomeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.season = this.route.snapshot.data['season'];
  }
}
