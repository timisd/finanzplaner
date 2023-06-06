import { Component, Input } from '@angular/core';
import { CashflowDto, CashflowWrapper } from '../../../models';
import { CashflowService } from '../../../services';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { CashflowDialogComponent } from '../../cashflowDialog/cashflowDialog.component';

@Component({
  selector: 'app-cashflow-card-normal',
  templateUrl: './cashflowCardNormal.component.html',
  styleUrls: ['./cashflowCardNormal.component.scss'],
})
export class CashflowCardNormalComponent {
  @Input() public data!: CashflowDto;

  constructor(
    private _cashflowService: CashflowService,
    private _toast: ToastrService,
    private _cashflowDialog: MatDialog
  ) {}

  public get CashflowWrapper(): CashflowWrapper {
    return new CashflowWrapper(this.data);
  }

  public editEntry(): void {
    console.info('edit', this.CashflowWrapper);
    this._cashflowDialog.open(CashflowDialogComponent, {
      data: this.CashflowWrapper,
    });
  }

  public deleteEntry(): void {
    if (this._cashflowService.deleteCashflow(this.CashflowWrapper.Id)) {
      this._toast.success(
        this.CashflowWrapper.toString(),
        'Eintrag erfolgreich gelöscht'
      );
    } else {
      this._toast.error(
        this.CashflowWrapper.toString(),
        'Eintrag konnte nicht gelöscht werden'
      );
    }
  }
}
