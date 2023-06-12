import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CashflowDto } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class DataStore {
  public Cashflows$: BehaviorSubject<CashflowDto[]> = new BehaviorSubject<
    CashflowDto[]
  >([]);
  public CurrentBalance: number = 0;
  private _testDataAdded: boolean = false;
  private _data: CashflowDto[] = [];

  constructor() {
    if (!this._testDataAdded) {
      this.addTestData();
    }
  }

  public deleteCashflow(id: number): boolean {
    const index = this._data.findIndex((value: CashflowDto) => value.Id === id);

    if (index === -1) {
      return false;
    }

    this._data.splice(index, 1);
    this.Cashflows$.next(this._data);

    return true;
  }

  public updateCashflow(newCashflow: CashflowDto): boolean {
    const index = this._data.findIndex(
      (value: CashflowDto) => value.Id === newCashflow.Id
    );

    if (index === -1) {
      return false;
    }

    this._data[index] = newCashflow;
    this.Cashflows$.next(this._data);

    return true;
  }

  public addCashflow(newCashflow: CashflowDto): boolean {
    try {
      this._data.push(newCashflow);
      this.Cashflows$.next(this._data);

      return true;
    } catch (e: any) {
      console.info(e);

      return false;
    }
  }

  private addTestData(): void {
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(startDate.getDate() + 34);

    for (let i = 1_000; i < 1_060; i++) {
      const randomDate = new Date(
        startDate.getTime() +
          Math.random() * (endDate.getTime() - startDate.getTime())
      );
      const randomAmount = parseFloat((Math.random() * 1_000 - 500).toFixed(2));
      const randomParticipant = `Party_${i + 1}`;
      const randomTags = this.generateRandomTags();

      const cashflow: CashflowDto = {
        Id: i,
        Date: randomDate,
        Amount: randomAmount,
        IsIncome: randomAmount > 0,
        Participant: randomParticipant,
        Tags: randomTags,
      };

      this._data.push(cashflow);

      this.CurrentBalance = 5_000;

      this._testDataAdded = true;
      this.Cashflows$.next(this._data);
    }
  }

  private generateRandomTags(): string[] {
    const tags = [
      'Tag1',
      'Tag2',
      'Tag3',
      'Tag4',
      'Tag5',
      'Tag6',
      'Tag7',
      'Tag8',
      'Tag9',
      'Tag10',
    ];
    const randomTags: string[] = [];
    const numOfTags = Math.floor(Math.random() * 4) + 1;

    while (randomTags.length < numOfTags) {
      const randomIndex = Math.floor(Math.random() * tags.length);
      const randomTag = tags[randomIndex];

      if (!randomTags.includes(randomTag)) {
        randomTags.push(randomTag);
      }
    }

    return randomTags;
  }
}
