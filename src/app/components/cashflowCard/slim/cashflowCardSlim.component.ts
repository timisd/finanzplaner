import { Component, Input, OnInit } from '@angular/core';
import { CashflowDto, CashflowWrapper } from '../../../models';

@Component({
  selector: 'app-cashflow-card-slim',
  templateUrl: './cashflowCardSlim.component.html',
  styleUrls: ['./cashflowCardSlim.component.scss'],
})
export class CashflowCardSlimComponent implements OnInit {
  @Input() public data!: CashflowDto;
  public wrapper!: CashflowWrapper;

  ngOnInit() {
    this.wrapper = new CashflowWrapper(this.data);
  }
}
