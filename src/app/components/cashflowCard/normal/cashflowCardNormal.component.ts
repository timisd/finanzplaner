import { Component, Input } from '@angular/core';
import { CashflowDto } from '../../../models';

@Component({
  selector: 'app-cashflow-card-normal',
  templateUrl: './cashflowCardNormal.component.html',
  styleUrls: ['./cashflowCardNormal.component.scss'],
})
export class CashflowCardNormalComponent {
  @Input() public data!: CashflowDto;
}
