import { Component } from '@angular/core';
import { CashflowDto } from '../../DTOs/cashflow.dto';

@Component({
  selector: 'app-cashflow',
  templateUrl: './cashflow.page.html',
  styleUrls: ['./cashflow.page.scss'],
})
export class CashflowPage {
  public cashflowData: CashflowDto = {
    Id: 1_000,
    Day: new Date(),
    Amount: 500,
    IsIncome: true,
    Participant: 'Hans Wurst',
  };
}
