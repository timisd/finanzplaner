export interface CashflowDto {
  Day: Date;
  Amount: number;
  IsIncome: boolean;
  Participant: string;
  Tags: Array<string> | undefined;
}
