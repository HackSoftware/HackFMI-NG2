import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';

import { CompetitorsService } from './competitors.service';
import { CompetitorInfoForList } from './competitors.models';


@Injectable()
export class CompetitorsResolver implements Resolve<CompetitorInfoForList[]> {
  constructor(private _competitorsService: CompetitorsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this._competitorsService.getCompetitorsList();
  }
}
