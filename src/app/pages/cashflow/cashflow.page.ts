import { Component } from '@angular/core';
import { CashflowDto } from '../../models';
import { FilterService } from '../../services';

@Component({
  selector: 'app-cashflow',
  templateUrl: './cashflow.page.html',
  styleUrls: ['./cashflow.page.scss'],
})
export class CashflowPage {
  public incomeData: CashflowDto[] = [];
  public spendingData: CashflowDto[] = [];
  public searchInput: string = '';

  constructor(private _filterService: FilterService) {
    this.filterValues();
  }

  public onInputChanged(event: Event): void {
    const key = (event.target as HTMLInputElement).value.trim().toLowerCase();

    if (this.isValidKeyDown(key)) {
      this.filterValues();
    }
  }

  public tagButtonClicked(tag: string): void {
    this.searchInput = tag;
    this.filterValues();
  }

  public dataChanged(): void {
    this.filterValues();
  }

  public filterValues(): void {
    this.mapSearchResult(
      this._filterService.filter(this.searchInput.toLowerCase())
    );
  }

  private mapSearchResult(searchResult: CashflowDto[]) {
    const income = searchResult.filter((dto: CashflowDto) => dto.IsIncome);

    const spending = searchResult.filter((dto: CashflowDto) => !dto.IsIncome);

    this.incomeData = income;
    this.spendingData = spending;
  }

  private isValidKeyDown(key: string): boolean {
    const allowedCharacters =
      /^[a-zA-Z0-9!@#$€%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/;

    return allowedCharacters.test(key);
  }
}
