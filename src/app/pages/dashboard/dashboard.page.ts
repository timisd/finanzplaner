import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BalanceDto, BalanceWrapper, CashflowDto } from '../../models';
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

  public getChartData(): BalanceDto[] {
    return this._balanceService.Balances.slice(-30);
  }

  public getCurrentBalance(): string {
    return this.getBalanceWrapper(this._balanceService.Balances.slice(-1)[0])
      .FormattedBalance;
  }

  public getLastCashflows(): CashflowDto[] {
    const index = this._cashflowService.CashflowsOrderedByDateASC.length - 8;

    return this._cashflowService.CashflowsOrderedByDateASC.slice(
      index
    ).reverse();
  }

  public navigateToCashflowPage(): void {
    this._router.navigate(['/cashflow']).then();
  }

  private getBalanceWrapper(dto: BalanceDto): BalanceWrapper {
    return new BalanceWrapper(dto);
  }
}
