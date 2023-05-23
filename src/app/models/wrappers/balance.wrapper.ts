import { BalanceDto } from '../dtos/balance.dto';

export class BalanceWrapper {
  public dto: BalanceDto;

  constructor(dto: BalanceDto) {
    this.dto = dto;
  }

  public getDate(): Date {
    return this.dto.Date;
  }
  public getBalance(): number {
    return this.dto.Balance;
  }
}
