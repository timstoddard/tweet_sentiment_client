import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import candidates, { Candidate } from './candidates';
import { Observable } from 'rxjs';
import { CandidateService } from './candidate.service';
import { map } from 'rxjs/operators';
import { getStartAndEndDates } from './utils';

@Injectable({ providedIn: 'root' })
export class CandidateResolver implements Resolve<Candidate> {
  constructor(private candidateService: CandidateService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Candidate> {
    const id = route.paramMap.get('candidate');
    const [startDate, endDate] = getStartAndEndDates(route.queryParamMap);
    return this.candidateService.getCandidate(id, startDate, endDate)
      .pipe(map(c => {
        const info = candidates.find(
          (candidate: Candidate) => candidate.id === id);
        return Object.assign({}, info, { data: c.data });
      }));
  }
}
