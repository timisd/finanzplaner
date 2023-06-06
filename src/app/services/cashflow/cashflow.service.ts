import { Injectable } from '@angular/core';
import { DataStore } from '../../stores';
import { CashflowDto, CashflowWrapper } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class CashflowService {
  constructor(private _dataStore: DataStore) {}

  public get CashflowsUnsorted(): CashflowWrapper[] {
    return this._dataStore.Cashflows;
  }

  public get CashflowsOrderedByDateASC(): CashflowWrapper[] {
    return this._dataStore.Cashflows.sort(
      (a, b) => a.Date.getTime() - b.Date.getTime()
    );
  }

  public get CashflowsOrderedByDateDES(): CashflowWrapper[] {
    return this._dataStore.Cashflows.sort(
      (a, b) => b.Date.getTime() - a.Date.getTime()
    );
  }

  public get CashflowsOrderedById(): CashflowWrapper[] {
    return this._dataStore.Cashflows.sort((a, b) => a.Id - b.Id);
  }

  public get CashflowsPerDay(): Map<string, CashflowDto[]> {
    return this.CashflowsOrderedByDateASC.reduce((result, cashflow) => {
      const key = cashflow.Date.toDateString();
      const values = result.get(key) || [];
      values.push(cashflow);
      result.set(key, values);
      return result;
    }, new Map<string, CashflowDto[]>());
  }

  public deleteCashflow(id: number): boolean {
    const index = this.CashflowsUnsorted.findIndex(
      (value: CashflowWrapper) => value.Id === id
    );

    if (index === -1) {
      return false;
    }

    this._dataStore.Cashflows.splice(index, 1);

    return true;
  }

  public updateCashflow(newCashflow: CashflowWrapper): boolean {
    const index = this.CashflowsUnsorted.findIndex(
      (value: CashflowWrapper) => value.Id === newCashflow.Id
    );

    if (index === -1) {
      return false;
    }

    console.info('before', this._dataStore.Cashflows);
    console.info('index', index);
    this._dataStore.Cashflows[index] = newCashflow;
    console.info('after', this._dataStore.Cashflows);

    return true;
  }
}
