import { Injectable } from '@angular/core';
import { BalanceWrapper, CashflowDto, CashflowWrapper } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class DataStore {
  private _cashflows: CashflowWrapper[] = [];
  private _testDataAdded: boolean = false;

  constructor() {
    if (!this._testDataAdded) {
      this.addTestData();
    }
  }

  public setCashflows(cashflow: CashflowWrapper[]): void {
    this._cashflows = cashflow;
  }
  public getCashflows(): CashflowWrapper[] {
    return this._cashflows;
  }

  public updateCashflow(cashflow: CashflowWrapper): void {
    const index = this._cashflows.findIndex(
      (entry: CashflowWrapper) => entry.getId() === cashflow.getId()
    );

    if (index < 0) return;
    this._cashflows[index] = cashflow;
  }

  public deleteCashflow(id: number): void {
    const index = this._cashflows.findIndex(
      (entry: CashflowWrapper) => entry.getId() === id
    );

    if (index < 0) return;

    this._cashflows.splice(index, 1);
  }

  public getBalance(): BalanceWrapper[] {
    const balance: BalanceWrapper[] = [];
    const sumByDate: Map<string, number> = new Map<string, number>();

    this._cashflows.forEach((cashflow: CashflowWrapper) => {
      const dateStr: string = cashflow.getDate().toDateString();
      const amount: number = cashflow.getAmount();

      if (sumByDate.has(dateStr)) {
        const currentSum: number = sumByDate.get(dateStr)!;
        sumByDate.set(dateStr, currentSum + amount);
      } else {
        sumByDate.set(dateStr, amount);
      }
    });

    sumByDate.forEach((amount: number, date: string) => {
      balance.push(
        new BalanceWrapper({ Date: new Date(date), Balance: amount })
      );
    });

    return balance;
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

      this._cashflows.push(new CashflowWrapper(cashflow));

      this._cashflows.sort((a: CashflowWrapper, b: CashflowWrapper) => {
        const dateA: Date = a.getDate();
        const dateB: Date = b.getDate();

        return dateA.getDate() - dateB.getDate();
      });

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
