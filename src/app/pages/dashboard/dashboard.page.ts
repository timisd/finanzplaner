import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CashflowService } from '../../services';
import { DataStore } from '../../stores';
import { BalanceWrapper, CashflowWrapper } from '../../models';

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  constructor(
    private _cashflowService: CashflowService,
    private _router: Router,
    private _dataStore: DataStore
  ) {}

  public getChartData(): BalanceWrapper[] {
    return this._dataStore.getBalance();
  }

  public getCurrentBalance(): string {
    return this._dataStore
      .getBalance()
      [this._dataStore.getBalance().length - 1].getBalance()
      .toLocaleString('de-DE', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  }

  public getLastCashflows(): CashflowWrapper[] {
    const index = this._dataStore.getCashflows().length - 8;

    return this._dataStore.getCashflows().slice(index).reverse();
  }

  public navigateToCashflowPage(): void {
    this._router.navigate(['/cashflow']);
  }
}
