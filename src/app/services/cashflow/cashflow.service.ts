import { Injectable } from '@angular/core';
import { CashflowDto } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class CashflowService {
  private _cashflows: CashflowDto[] = [];

  constructor() {}

  public addCashflow(newCashflow: CashflowDto): void {
    this._cashflows.push(newCashflow);
  }

  public editCashflow(index: number, newCashflow: CashflowDto): void {
    this._cashflows[index] = newCashflow;
  }

  public deleteCashflow(index: number): void {
    this._cashflows.splice(index, 1);
  }

  public getIncome(): CashflowDto[] {
    return this._cashflows.filter((element: CashflowDto) => element.IsIncome);
  }

  public getExpenses(): CashflowDto[] {
    return this._cashflows.filter((element: CashflowDto) => !element.IsIncome);
  }
}
