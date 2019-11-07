import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Candidate } from '../shared/candidates';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
  @Output() candidateSelected = new EventEmitter();
  candidate: Candidate;
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
        console.log(data.candidate)
        this.candidate = data.candidate;
        this.candidateSelected.emit(this.candidate);
      });
  }

  getDataset(candidate: Candidate) {
    return [{
      data: candidate.data,
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
    console.log(e);
  }
}
