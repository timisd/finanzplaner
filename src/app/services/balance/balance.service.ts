import { Injectable } from '@angular/core';
import { DataStore } from '../../stores';
import { BalanceWrapper } from '../../models';
import { CashflowService } from '../cashflow/cashflow.service';

@Injectable({
  providedIn: 'root',
})
export class BalanceService {
  constructor(
    private _dataStore: DataStore,
    private _cashflowService: CashflowService
  ) {}

  public get Balances(): BalanceWrapper[] {
    const balances: BalanceWrapper[] = [];

    let previousCumulativeAmount = this._dataStore.CurrentBalance;

    for (const [dateString, cashflows] of this._cashflowService
      .CashflowsPerDay) {
      const cumulativeAmount = cashflows.reduce(
        (sum, cashflow) => sum + cashflow.Amount,
        0
      );
      const currentDate = new Date(dateString);

      const updatedCumulativeAmount =
        previousCumulativeAmount + cumulativeAmount;
      balances.push(
        new BalanceWrapper({
          Date: currentDate,
          Balance: updatedCumulativeAmount,
        })
      );

      previousCumulativeAmount = updatedCumulativeAmount;
    }

    return balances;
  }
}
