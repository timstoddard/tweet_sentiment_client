import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompareComponent } from './compare/compare.component';
import { CandidateComponent } from './candidate/candidate.component';
import { CandidateResolver } from './shared/candidate.resolver';
import { CandidatesResolver } from './shared/candidates.resolver';

const routes: Routes = [
  {
    path: 'compare',
    component: CompareComponent,
    resolve: { candidates: CandidatesResolver }
  },
  {
    path: ':candidate',
    component: CandidateComponent,
    resolve: { candidate: CandidateResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
