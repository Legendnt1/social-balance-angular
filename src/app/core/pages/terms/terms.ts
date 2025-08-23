import { Component } from '@angular/core';
import { TERMS_DATA } from '../../consts/terms/terms.const';
import { TermData } from '../../interfaces/terms/term.interface';
import { LAST_DATE_UPDATED } from '../../consts/terms/dates.const';

@Component({
  selector: 'app-terms',
  imports: [],
  templateUrl: './terms.html',
})
export class Terms {
  termsData: TermData[] = TERMS_DATA;
  lastUpdated = LAST_DATE_UPDATED;
}
