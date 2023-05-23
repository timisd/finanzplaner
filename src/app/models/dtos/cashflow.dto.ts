export interface CashflowDto {
  Id: number;
  Date: Date;
  Amount: number;
  IsIncome: boolean;
  Participant: string;
  Tags?: Array<string>;
}
