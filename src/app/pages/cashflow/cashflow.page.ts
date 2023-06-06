import { Component } from '@angular/core';
import { CashflowDto } from '../../models';
import { CashflowService } from '../../services';

@Component({
  selector: 'app-cashflow',
  templateUrl: './cashflow.page.html',
  styleUrls: ['./cashflow.page.scss'],
})
export class CashflowPage {
  constructor(private _cashflowService: CashflowService) {}

  public get incomeData(): CashflowDto[] {
    return this._cashflowService.CashflowsOrderedByDateDES.filter(
      (dto: CashflowDto) => dto.IsIncome
    );
  }

  public get spendingData(): CashflowDto[] {
    return this._cashflowService.CashflowsOrderedByDateDES.filter(
      (dto: CashflowDto) => !dto.IsIncome
    );
  }
}
