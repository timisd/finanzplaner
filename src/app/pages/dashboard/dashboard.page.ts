import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataStore } from '../../stores';
import { BalanceWrapper, CashflowWrapper } from '../../models';

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  constructor(private _router: Router, private _dataStore: DataStore) {}

  public getChartData(): BalanceWrapper[] {
    return this._dataStore.getBalance();
  }

  public getCurrentBalance(): string {
    return this._dataStore.getBalance()[this._dataStore.getBalance().length - 1]
      .FormattedBalance;
  }

  public getLastCashflows(): CashflowWrapper[] {
    const index = this._dataStore.getCashflows().length - 8;

    return this._dataStore.getCashflows().slice(index).reverse();
  }

  public navigateToCashflowPage(): void {
    this._router.navigate(['/cashflow']);
  }
}
