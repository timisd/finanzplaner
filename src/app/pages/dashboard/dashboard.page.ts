import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BalanceDto, BalanceWrapper, CashflowDto } from '../../models';
import { BalanceService, CashflowService } from '../../services';
import { CashflowDialogComponent } from '../../components';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnDestroy {
  public currentBalance: string = '';
  private _dataSub: Subscription | undefined;

  constructor(
    private _router: Router,
    private _cashflowService: CashflowService,
    private _balanceService: BalanceService,
    private _cashflowDialog: MatDialog
  ) {
    this._dataSub = this._balanceService.Balances$.subscribe(
      (data: BalanceDto[]) => this.setCurrentBalance(data)
    );
  }

  public get LastCashflows(): CashflowDto[] {
    const index = this._cashflowService.CashflowsOrderedByDateASC.length - 8;

    return this._cashflowService.CashflowsOrderedByDateASC.slice(
      index
    ).reverse();
  }

  ngOnDestroy() {
    this._dataSub?.unsubscribe();
  }

  public navigateToCashflowPage(): void {
    this._router.navigate(['/cashflow']).then();
  }

  public addNewCashflow(): void {
    this._cashflowDialog
      .open(CashflowDialogComponent)
      .afterClosed()
      .subscribe((result) => {
        if (result) {
        }
      });
  }

  private setCurrentBalance(balances: BalanceDto[]): void {
    this.currentBalance = new BalanceWrapper(
      balances.slice(-1)[0]
    ).FormattedBalance;
  }
}
