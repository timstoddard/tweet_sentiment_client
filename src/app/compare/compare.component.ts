import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Candidate } from '../shared/candidates';
import { CompareColorsService } from './shared/compare-colors.service';
import { updateChartLabels, initQueryParams } from '../shared/utils';

const CANDIDATE_LIMIT = 5;

interface Dataset {
  data: number[];
  label: string;
}

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {
  allCandidates: Candidate[] = [];
  allChartColors = [];
  selectedCandidateIds: Set<string> = new Set();
  selectedCandidates = 0;
  datasets: Dataset[] = [];
  chartColors = [];
  possibleListLengths = [];
  chartLabels = Array(12).fill('');
  loading = false;

  private ngUnsubscribe: Subject<void> = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private compareColorsService: CompareColorsService,
    private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.activatedRoute.data
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        this.loading = false;
        this.allCandidates = data.candidates;
        this.chartLabels = updateChartLabels(this.allCandidates[0].data.map(entry => entry.time));
      });
    this.possibleListLengths = this.getAllLengths();
    this.allChartColors = this.compareColorsService.getColors();

    initQueryParams(this.activatedRoute, this.router,
      () => this.loading = true);
  }

  selectCandidate(id: string) {
    if (this.canSelectCandidate(id)) {
      this.selectedCandidateIds.add(id);
      this.selectedCandidates++;
      this.updateChartData();
    }
  }

  unselectCandidate(event: Event, id: string) {
    event.stopPropagation();
    this.selectedCandidateIds.delete(id);
    this.selectedCandidates--;
    this.updateChartData();
  }

  chartClicked(e: any): void {
    console.log(e);
  }

  chartHovered(e: any): void {
  }

  isSelected(candidate: Candidate) {
    return this.selectedCandidateIds.has(candidate.id);
  }

  getCandidateClasses(candidate: Candidate) {
    const alreadySelected = this.isSelected(candidate);
    const maxLimitReached = this.selectedCandidateIds.size >= CANDIDATE_LIMIT;
    return {
      'compare__candidate--selectDisabled': alreadySelected || maxLimitReached
    };
  }

  private updateChartData() {
    const selectedCandidates = this.allCandidates.filter(
      (candidate: Candidate) => this.selectedCandidateIds.has(candidate.id));
    this.datasets = selectedCandidates.map(
      ({ data, name }: Candidate) => ({
        data: data.map(entry => entry.sentiment),
        label: name,
      }));
    this.chartColors = this.allChartColors
      .slice(0, selectedCandidates.length);
    this.changeDetectorRef.markForCheck();
  }

  private canSelectCandidate(id: string) {
    return !this.selectedCandidateIds.has(id)
      && this.selectedCandidateIds.size < CANDIDATE_LIMIT;
  }

  private getAllLengths() {
    const result = [];
    for (let i = 0; i < CANDIDATE_LIMIT; i++) {
      result[i] = i + 1;
    }
    return result;
  }
}
