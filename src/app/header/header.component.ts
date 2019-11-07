import { Component } from '@angular/core';

import candidates from '../shared/candidates';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  candidates = candidates;
}
