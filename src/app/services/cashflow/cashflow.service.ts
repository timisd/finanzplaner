import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStore } from '../../stores';
import { CashflowDto } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class CashflowService implements OnDestroy {
  private _dataSub: Subscription | undefined;
  private _data: CashflowDto[] = [];

  constructor(private _dataStore: DataStore) {
    this._dataSub = this._dataStore.Cashflows$.subscribe(
      (array: CashflowDto[]) => {
        this._data = array;
      }
    );
  }

  public get CashflowsUnsorted(): CashflowDto[] {
    return this._data;
  }

  public get CashflowsOrderedByDateASC(): CashflowDto[] {
    return [...this._data].sort((a, b) => a.Date.getTime() - b.Date.getTime());
  }

  public get CashflowsOrderedByDateDES(): CashflowDto[] {
    return [...this._data].sort((a, b) => b.Date.getTime() - a.Date.getTime());
  }

  public get CashflowsOrderedById(): CashflowDto[] {
    return [...this._data].sort((a, b) => a.Id - b.Id);
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

  ngOnDestroy(): void {
    this._dataSub?.unsubscribe();
  }

  public deleteCashflow(id: number): boolean {
    return this._dataStore.deleteCashflow(id);
  }

  public updateCashflow(newCashflow: CashflowDto): boolean {
    return this._dataStore.updateCashflow(newCashflow);
  }

  public addCashflow(newCashflow: CashflowDto): boolean {
    return this._dataStore.addCashflow(newCashflow);
  }
}
