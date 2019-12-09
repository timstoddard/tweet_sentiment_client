import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {
  MatNativeDateModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';
import { ChartsModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateComponent } from './candidate/candidate.component';
import { CompareComponent } from './compare/compare.component';
import { HeaderComponent } from './header/header.component';
import { DateRangeComponent } from './date-range/date-range.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    CompareComponent,
    HeaderComponent,
    DateRangeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ChartsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
