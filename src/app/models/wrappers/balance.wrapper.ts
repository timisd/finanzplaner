import { BalanceDto } from '../dtos/balance.dto';

export class BalanceWrapper {
  public dto: BalanceDto;

  constructor(dto: BalanceDto) {
    this.dto = dto;
  }

  public get Date(): Date {
    return this.dto.Date;
  }
  public get Balance(): number {
    return this.dto.Balance;
  }

  public get FormattedBalance(): string {
    const formattedAmount = Math.abs(this.dto.Balance).toLocaleString('de-DE', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return `${this.dto.Balance >= 0 ? '+' : '-'}${formattedAmount} €`;
  }
}
