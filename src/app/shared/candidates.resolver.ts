import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import candidates, { Candidate } from './candidates';
import { Observable } from 'rxjs';
import { CandidateService, CandidateResponse } from './candidate.service';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CandidatesResolver implements Resolve<Candidate[]> {
  constructor(private candidateService: CandidateService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Candidate[]> {
    return this.candidateService.getCandidates()
      .pipe(map((candidatesData: CandidateResponse[]) =>
        candidatesData.map(({ id, data }: CandidateResponse) => {
          const info = candidates.find(
            (candidate: Candidate) => candidate.id === id);
          return Object.assign({}, info, { data });
        })));
  }
}
