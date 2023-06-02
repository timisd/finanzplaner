import { Injectable } from '@angular/core';
import { DataStore } from '../../stores';
import { CashflowDto, CashflowWrapper } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class CashflowService {
  constructor(private _dataStore: DataStore) {}

  public get Cashflows(): CashflowWrapper[] {
    return this._dataStore.Cashflows.sort(
      (a, b) => a.Date.getTime() - b.Date.getTime()
    );
  }

  public get CashflowsPerDay(): Map<string, CashflowDto[]> {
    return this.Cashflows.reduce((result, cashflow) => {
      const key = cashflow.Date.toDateString();
      const values = result.get(key) || [];
      values.push(cashflow);
      result.set(key, values);
      return result;
    }, new Map<string, CashflowDto[]>());
  }
}