import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Candidate } from '../shared/candidates';
import { CompareColorsService } from './shared/compare-colors.service';

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
  selectedCandidates: Candidate[] = [];
  datasets: Dataset[] = [];
  chartColors = [];
  possibleListLengths = [];
  chartLabels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  private ngUnsubscribe: Subject<void> = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private compareColorsService: CompareColorsService) {}

  ngOnInit() {
    this.activatedRoute.data
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        this.allCandidates = data.candidates;
        console.log(this.allCandidates)
      });
    this.possibleListLengths = this.getAllLengths();
    this.allChartColors = this.compareColorsService.getColors();
  }

  selectCandidate(id: string) {
    if (this.canSelectCandidate(id)) {
      this.selectedCandidateIds.add(id);
      this.updateChartData();
    }
  }

  unselectCandidate(id: string) {
    this.selectedCandidateIds.delete(id);
    this.updateChartData();
  }

  chartClicked(e: any): void {
    console.log(e);
  }

  chartHovered(e: any): void {
    console.log(e);
  }

  getCandidateClasses(candidate: Candidate) {
    const alreadySelected = this.selectedCandidateIds.has(candidate.id);
    const maxLimitReached = this.selectedCandidateIds.size >= CANDIDATE_LIMIT;
    return {
      'compare__candidate--selectDisabled': alreadySelected || maxLimitReached
    };
  }

  private updateChartData() {
    this.selectedCandidates = this.allCandidates.filter(
      (candidate: Candidate) => this.selectedCandidateIds.has(candidate.id));
    this.datasets = this.selectedCandidates.map(
      ({ data, name }: Candidate) => ({
        data,
        label: name,
      }));
    this.chartColors = this.allChartColors
      .slice(0, this.selectedCandidates.length);
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
