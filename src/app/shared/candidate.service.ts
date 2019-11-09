import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CandidateResponse {
  id: string;
  data: number[];
}

@Injectable({ providedIn: 'root' })
export class CandidateService {
  private baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getCandidate(id: string): Observable<CandidateResponse> {
    return this.http.get<CandidateResponse>(this.formatUrl(`candidate/${id}`));
  }

  getCandidates(): Observable<CandidateResponse[]> {
    return this.http.get<CandidateResponse[]>(this.formatUrl('all'));
  }

  private formatUrl(path: string) {
    return `${this.baseUrl}/${path}`;
  }
}
