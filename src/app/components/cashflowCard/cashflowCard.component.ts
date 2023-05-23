import { Component, Input } from '@angular/core';
import { CashflowDto } from '../../DTOs/cashflow.dto';

@Component({
  selector: 'app-cashflow-card',
  templateUrl: './cashflowCard.component.html',
  styleUrls: ['./cashflowCard.component.scss'],
})
export class CashflowCardComponent {
  @Input() public data!: CashflowDto;
}
