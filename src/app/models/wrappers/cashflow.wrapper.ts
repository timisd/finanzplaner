import { CashflowDto } from '../dtos/cashflow.dto';

export class CashflowWrapper {
  public dto: CashflowDto;

  constructor(dto: CashflowDto) {
    this.dto = dto;
  }

  public getId(): number {
    return this.dto.Id;
  }
  public getDate(): Date {
    return this.dto.Date;
  }
  public getAmount(): number {
    return this.dto.Amount;
  }
  public getFormattedAmount(): string {
    const formattedAmount = Math.abs(this.dto.Amount).toLocaleString('de-DE', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return `${this.dto.Amount >= 0 ? '+' : '-'} ${formattedAmount} €`;
  }
  public getIsIncome(): boolean {
    return this.dto.IsIncome;
  }
  public getParticipant(): string {
    return this.dto.Participant;
  }
  public getTags(): Array<string> | undefined {
    return this.dto.Tags;
  }
}
