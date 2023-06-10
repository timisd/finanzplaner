import { Injectable } from '@angular/core';
import { CashflowService } from '../cashflow/cashflow.service';
import { CashflowDto } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  constructor(private _cashflowService: CashflowService) {}

  public filter(searchValue: string): CashflowDto[] {
    return this._cashflowService.CashflowsOrderedByDateDES.filter(
      (cashflow) =>
        cashflow.Id.toString().includes(searchValue) ||
        cashflow.Date.toString().includes(searchValue) ||
        cashflow.Participant.toLowerCase().includes(searchValue) ||
        cashflow.Amount.toString().includes(searchValue) ||
        (cashflow.Tags &&
          cashflow.Tags.some((tag) => tag.toLowerCase().includes(searchValue)))
    );
  }

  public filterForTags(searchTag: string): CashflowDto[] {
    return this._cashflowService.CashflowsOrderedByDateDES.filter(
      (dto: CashflowDto) => dto.Tags?.includes(searchTag)
    );
  }

  public filterForParticipant(searchText: string): CashflowDto[] {
    return this._cashflowService.CashflowsOrderedByDateDES.filter(
      (dto: CashflowDto) => dto.Participant.includes(searchText)
    );
  }
}
