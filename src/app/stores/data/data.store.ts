import { Injectable } from '@angular/core';
import { CashflowDto, CashflowWrapper } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class DataStore {
  public Cashflows: CashflowWrapper[] = [];
  public CurrentBalance: number = 0;
  private _testDataAdded: boolean = false;

  constructor() {
    if (!this._testDataAdded) {
      this.addTestData();
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
        Id: i + 1,
        Date: randomDate,
        Amount: randomAmount,
        IsIncome: randomAmount > 0,
        Participant: randomParticipant,
        Tags: randomTags,
      };

      this.Cashflows.push(new CashflowWrapper(cashflow));

      this.Cashflows.sort((a: CashflowWrapper, b: CashflowWrapper) => {
        const dateA: Date = a.Date;
        const dateB: Date = b.Date;

        return dateA.getDate() - dateB.getDate();
      });

      this.CurrentBalance = 5_000;

      this._testDataAdded = true;
    }
  }

  private generateRandomTags(): string[] {
    const tags = ['Tag1', 'Tag2', 'Tag3', 'Tag4', 'Tag5'];
    const randomTags: string[] = [];
    const numTags = Math.floor(Math.random() * 4) + 1;

    for (let i = 0; i < numTags; i++) {
      const randomIndex = Math.floor(Math.random() * tags.length);
      randomTags.push(tags[randomIndex]);
    }

    return randomTags;
  }
}
