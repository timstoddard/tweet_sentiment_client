import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Candidate } from '../shared/candidates';
import { updateChartLabels, initQueryParams } from '../shared/utils';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
  candidate: Candidate;
  chartColors = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
  ];
  chartLabels = Array(12).fill('');
  loading = false;

  private ngUnsubscribe: Subject<void> = new Subject();

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.activatedRoute.data
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        this.loading = false;
        console.log(data.candidate)
        this.candidate = data.candidate;
        this.chartLabels = updateChartLabels(this.candidate.data.map(entry => entry.time));
      });

    initQueryParams(this.activatedRoute, this.router,
      () => this.loading = true);
  }

  getDataset(candidate: Candidate) {
    return [{
      data: candidate.data.map(entry => entry.sentiment),
      label: candidate.name,
    }];
  }

  getAge(birthday: Date) {
    const now = new Date();
    const yearDiff = now.getFullYear() - birthday.getFullYear();
    now.setFullYear(birthday.getFullYear());
    return yearDiff + (now > birthday ? 1 : 0);
  }

  chartClicked(e: any): void {
    console.log(e);
  }

  chartHovered(e: any): void {
  }
}
