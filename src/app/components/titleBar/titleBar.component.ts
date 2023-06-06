import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CashflowDialogComponent } from '../cashflowDialog/cashflowDialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-titleBar',
  templateUrl: './titleBar.component.html',
  styleUrls: ['./titleBar.component.scss'],
})
export class TitleBarComponent {
  @Input() public pageName!: string;
  @Input() public showBackButton: boolean = false;
  @Input() public showAddButton: boolean = false;

  public addButtonToolTip: string;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _cashflowDialog: MatDialog
  ) {
    const route: string = this._activatedRoute.snapshot.url.join('/');

    if (route === 'ausgaben') {
      this.addButtonToolTip = 'Ausgabe hinzufügen';
    } else if (route === 'einnahmen') {
      this.addButtonToolTip = 'Einnahme hinzufügen';
    } else {
      this.addButtonToolTip = '';
    }
  }

  public navigateBackToDashboard(): void {
    this._router.navigate(['']);
  }

  public addNewCashflow(): void {
    this._cashflowDialog.open(CashflowDialogComponent);
  }
}
