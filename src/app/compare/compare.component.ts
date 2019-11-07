import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Candidate } from '../shared/candidates';

const CANDIDATE_LIMIT = 4;

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {
  candidates: Candidate[];
  chartColors = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
  ];
  chartLabels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  private ngUnsubscribe: Subject<void> = new Subject();

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        console.log(data.candidates)
        this.candidates = data.candidates;
      });
  }

  getDataset(candidate: Candidate) {
    return [{
      data: candidate.data,
      label: candidate.name,
    }];
  }

  chartClicked(e: any): void {
    console.log(e);
  }

  chartHovered(e: any): void {
    console.log(e);
  }
}
