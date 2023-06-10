import { Injectable } from '@angular/core';
import { DataStore } from '../../stores';
import { CashflowDto } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class CashflowService {
  constructor(private _dataStore: DataStore) {}

  public get CashflowsUnsorted(): CashflowDto[] {
    return this._dataStore.Cashflows;
  }

  public get CashflowsOrderedByDateASC(): CashflowDto[] {
    return this._dataStore.Cashflows.sort(
      (a, b) => a.Date.getTime() - b.Date.getTime()
    );
  }

  public get CashflowsOrderedByDateDES(): CashflowDto[] {
    return this._dataStore.Cashflows.sort(
      (a, b) => b.Date.getTime() - a.Date.getTime()
    );
  }

  public get CashflowsOrderedById(): CashflowDto[] {
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
      (value: CashflowDto) => value.Id === id
    );

    if (index === -1) {
      return false;
    }

    this._dataStore.Cashflows.splice(index, 1);

    return true;
  }

  public updateCashflow(newCashflow: CashflowDto): boolean {
    const index = this.CashflowsUnsorted.findIndex(
      (value: CashflowDto) => value.Id === newCashflow.Id
    );

    if (index === -1) {
      return false;
    }

    this._dataStore.Cashflows[index] = newCashflow;

    return true;
  }

  public addCashflow(newCashflow: CashflowDto): boolean {
    this._dataStore.Cashflows.push(newCashflow);

    return true;
  }
}
