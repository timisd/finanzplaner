import { CashflowDto } from '../dtos/cashflow.dto';

export class CashflowWrapper {
  public dto: CashflowDto;

  constructor(dto: CashflowDto) {
    this.dto = dto;
  }

  public get Id(): number {
    return this.dto.Id;
  }
  public get Date(): Date {
    return this.dto.Date;
  }
  public get FormattedDate(): string {
    return this.dto.Date.toLocaleString('de-DE', {
      hour: '2-digit',
      minute: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }
  public get Amount(): number {
    return this.dto.Amount;
  }
  public get FormattedAmount(): string {
    const formattedAmount = Math.abs(this.dto.Amount).toLocaleString('de-DE', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return `${this.dto.Amount >= 0 ? '+' : '-'}${formattedAmount} €`;
  }
  public get IsIncome(): boolean {
    return this.dto.IsIncome;
  }
  public get Participant(): string {
    return this.dto.Participant;
  }
  public get Tags(): Array<string> | undefined {
    return this.dto.Tags;
  }
}
