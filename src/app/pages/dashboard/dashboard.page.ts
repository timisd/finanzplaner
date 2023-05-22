import { Component } from '@angular/core';
import { CashflowService } from '../../services/cashflow/cashflow.service';
import { BalanceDto } from '../../DTOs/balance.dto';

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  constructor(private _cashflowService: CashflowService) {}

  public getChartData(): BalanceDto[] {
    return [
      { Day: new Date(), Balance: 50 },
      { Day: new Date(), Balance: 500 },
      { Day: new Date(), Balance: -133 },
      { Day: new Date(), Balance: 50 },
    ];
  }
}
