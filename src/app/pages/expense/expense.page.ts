import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.page.html',
  styleUrls: ['./expense.page.scss'],
})
export class ExpensePage {
  constructor(private _router: Router) {}

  public navigateBackToDashboard(): void {
    this._router.navigate(['']);
  }
}
