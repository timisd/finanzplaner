import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BalanceWrapper, CashflowWrapper } from '../../models';
import { BalanceService, CashflowService } from '../../services';

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  constructor(
    private _router: Router,
    private _cashflowService: CashflowService,
    private _balanceService: BalanceService
  ) {}

  public getChartData(): BalanceWrapper[] {
    return this._balanceService.Balances.slice(-30);
  }

  public getCurrentBalance(): string {
    return this._balanceService.Balances[
      this._balanceService.Balances.length - 1
    ].FormattedBalance;
  }

  public getLastCashflows(): CashflowWrapper[] {
    const index = this._cashflowService.Cashflows.length - 8;

    return this._cashflowService.Cashflows.slice(index).reverse();
  }

  public navigateToCashflowPage(): void {
    this._router.navigate(['/cashflow']).then();
  }
}
