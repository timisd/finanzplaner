import { Injectable, OnDestroy } from '@angular/core';
import { DataStore } from '../../stores';
import { BalanceDto } from '../../models';
import { CashflowService } from '../cashflow/cashflow.service';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BalanceService implements OnDestroy {
  public Balances$: BehaviorSubject<BalanceDto[]> = new BehaviorSubject<
    BalanceDto[]
  >([]);

  private _dataSub: Subscription | undefined;

  constructor(
    private _dataStore: DataStore,
    private _cashflowService: CashflowService
  ) {
    this._dataSub = this._dataStore.Cashflows$.subscribe(() => {
      this.CalculateBalances();
    });
  }

  ngOnDestroy() {
    this._dataSub?.unsubscribe();
  }

  private CalculateBalances(): void {
    const balances: BalanceDto[] = [];

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
      balances.push({
        Date: currentDate,
        Balance: updatedCumulativeAmount,
      });

      previousCumulativeAmount = updatedCumulativeAmount;
    }

    this.Balances$.next(balances);
  }
}
