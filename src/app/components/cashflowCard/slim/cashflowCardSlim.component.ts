import { Component, Input } from '@angular/core';
import { CashflowWrapper } from '../../../models';

@Component({
  selector: 'app-cashflow-card-slim',
  templateUrl: './cashflowCardSlim.component.html',
  styleUrls: ['./cashflowCardSlim.component.scss'],
})
export class CashflowCardSlimComponent {
  @Input() public data!: CashflowWrapper;
}
