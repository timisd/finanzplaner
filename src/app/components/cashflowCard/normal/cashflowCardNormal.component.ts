import { Component, Input } from '@angular/core';
import { CashflowDto, CashflowWrapper } from '../../../models';
import { CashflowService } from '../../../services';

@Component({
  selector: 'app-cashflow-card-normal',
  templateUrl: './cashflowCardNormal.component.html',
  styleUrls: ['./cashflowCardNormal.component.scss'],
})
export class CashflowCardNormalComponent {
  @Input() public data!: CashflowDto;

  constructor(private _cashflowService: CashflowService) {}

  public get CashflowWrapper(): CashflowWrapper {
    return new CashflowWrapper(this.data);
  }

  public editEntry(): void {
    console.info('edit', this.CashflowWrapper);
  }

  public deleteEntry(): void {
    if (this._cashflowService.deleteCashflow(this.CashflowWrapper.Id)) {
      console.info('successfully removed', this.CashflowWrapper);
    } else {
      console.info('failed to remove', this.CashflowWrapper);
    }
  }
}
