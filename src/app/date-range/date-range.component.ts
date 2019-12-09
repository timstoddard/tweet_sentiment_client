import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { getStartAndEndDates } from '../shared/utils';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss']
})
export class DateRangeComponent implements OnInit {
  @Output() datesChanged = new EventEmitter();
  form: FormGroup;
  emailFormControl: FormControl;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const [startDate, endDate] = getStartAndEndDates(this.activatedRoute.snapshot.queryParamMap);
    this.form = this.formBuilder.group({
      startDate: this.formBuilder.control(new Date(startDate)),
      endDate: this.formBuilder.control(new Date(endDate))
    });

    this.form.valueChanges.subscribe(x => {
      this.datesChanged.emit(null);
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: {
          start: parseInt(x.startDate.valueOf(), 10),
          end: parseInt(x.endDate.valueOf(), 10)
        },
        queryParamsHandling: 'merge',
        skipLocationChange: false,
      });
    });
  }
}
