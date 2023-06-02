import { Component } from '@angular/core';
import { CashflowDto } from '../../models';
import { CashflowService } from '../../services';

@Component({
  selector: 'app-cashflow',
  templateUrl: './cashflow.page.html',
  styleUrls: ['./cashflow.page.scss'],
})
export class CashflowPage {
  private _cashflowCache: CashflowDto[];
  constructor(private _cashflowService: CashflowService) {
    this._cashflowCache = this._cashflowService.Cashflows.sort(
      (a, b) => b.Date.getTime() - a.Date.getTime()
    );
  }

  public get incomeData(): CashflowDto[] {
    return this._cashflowCache.filter((dto: CashflowDto) => dto.IsIncome);
  }

  public get spendingData(): CashflowDto[] {
    return this._cashflowCache.filter((dto: CashflowDto) => !dto.IsIncome);
  }
}
