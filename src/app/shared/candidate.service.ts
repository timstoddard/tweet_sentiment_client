import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CandidateResponse {
  id: string;
  data: number[];
}

interface QueryParams {
  [key: string]: string | number | boolean;
}

const formatQueryString = (params: QueryParams) => {
  return Object.keys(params)
    .map((name: string) => `${name}=${encodeURIComponent(params[name])}`).join('&');
};

@Injectable({ providedIn: 'root' })
export class CandidateService {
  private baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getCandidate(id: string, startTime: number, endTime: number): Observable<CandidateResponse> {
    const queryParams = {
      start_time: startTime,
      end_time: endTime,
    };
    return this.http.get<CandidateResponse>(this.formatUrl(`candidate/${id}`, queryParams));
  }

  getCandidates(startTime: number, endTime: number): Observable<CandidateResponse[]> {
    const queryParams = {
      start_time: startTime,
      end_time: endTime,
    };
    return this.http.get<CandidateResponse[]>(this.formatUrl('all', queryParams));
  }

  private formatUrl(path: string, params: QueryParams) {
    return `${this.baseUrl}/${path}?${formatQueryString(params)}`;
  }
}
