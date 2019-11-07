import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs'; // TODO remove

export interface CandidateResponse {
  id: string;
  data: number[];
}

const baseUrl = 'http://localhost:5000';

@Injectable({ providedIn: 'root' })
export class CandidateService {
  constructor(private http: HttpClient) {}

  getCandidate(id: string): Observable<CandidateResponse> {
    // TODO add /candidate to api route
    return this.http.get<CandidateResponse>(`${baseUrl}/${id}`);
  }

  getCandidates(): Observable<CandidateResponse[]> {
    // return this.http.get<CandidateResponse[]>(`${baseUrl}/all`);
    return of([]);
  }
}
