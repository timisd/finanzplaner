export interface CashflowDto {
  Id: number;
  Day: Date;
  Amount: number;
  IsIncome: boolean;
  Participant: string;
  Tags?: Array<string>;
}
