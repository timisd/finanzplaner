import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CashflowService } from '../../services/cashflow/cashflow.service';
import { BalanceDto } from '../../DTOs/balance.dto';

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  constructor(
    private _cashflowService: CashflowService,
    private _router: Router
  ) {}

  public getChartData(): BalanceDto[] {
    const dataSets: BalanceDto[] = [];

    for (let i = 0; i < 30; i++) {
      const randomBalance = Math.floor(Math.random() * 1000) - 500; // Random balance between -500 and 500
      const dataSet: BalanceDto = { Day: new Date(), Balance: randomBalance };
      dataSets.push(dataSet);
    }

    return dataSets;
  }

  public navigateToIncomePage(): void {
    this._router.navigate(['/einnahmen']);
  }

  public navigateToExpansePage(): void {
    this._router.navigate(['/ausgaben']);
  }
}
