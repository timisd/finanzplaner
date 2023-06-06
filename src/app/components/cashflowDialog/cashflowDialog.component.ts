import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CashflowWrapper } from '../../models';
import { CashflowService } from '../../services';

@Component({
  selector: 'app-cashflow-dialog',
  templateUrl: './cashflowDialog.component.html',
  styleUrls: ['./cashflowDialog.component.scss'],
})
export class CashflowDialogComponent {
  public title: string = 'Test';

  public form!: FormGroup;

  constructor(
    private _dialogRef: MatDialogRef<CashflowDialogComponent>,
    private _fb: FormBuilder,
    private _cashflowService: CashflowService,
    @Inject(MAT_DIALOG_DATA) public cashflowData: CashflowWrapper
  ) {
    const localOffset = new Date().getTimezoneOffset() * 60000;
    const adjustedDate = new Date(
      this.cashflowData.Date.getTime() - localOffset
    );

    this.form = this._fb.group({
      participant: [
        this.cashflowData ? this.cashflowData.Participant : null,
        Validators.required,
      ],
      datetime: [
        this.cashflowData ? adjustedDate.toISOString().substring(0, 16) : null,
        Validators.required,
      ],
      amount: [
        this.cashflowData ? this.cashflowData.Amount : null,
        Validators.required,
      ],
      tags: [this.cashflowData ? this.cashflowData.Tags : this.getCurrentId()],
    });
  }

  public abort(): void {
    this._dialogRef.close();
  }

  public submit(): void {
    if (this.form.valid) {
      const formData = this.form.value;
      const newCashflowWrapper = new CashflowWrapper({
        Id: this.getId(),
        Date:
          typeof formData.datetime === 'string'
            ? new Date(formData.datetime)
            : this.cashflowData.Date,
        Amount: formData.amount,
        IsIncome: formData.amount > 0,
        Participant: formData.participant,
        Tags:
          typeof formData.tags === 'string'
            ? formData.tags.split(',')
            : this.cashflowData.Tags,
      });

      this._cashflowService.updateCashflow(newCashflowWrapper);
    }

    this._dialogRef.close();
  }

  public getId(): number {
    return this.cashflowData ? this.cashflowData.Id : this.getCurrentId();
  }

  private getCurrentId(): number {
    const lastId =
      this._cashflowService.CashflowsOrderedById[
        this._cashflowService.CashflowsOrderedById.length - 1
      ].Id;

    return lastId + 1;
  }
}
