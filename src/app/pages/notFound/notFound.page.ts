import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-notFound',
  templateUrl: './notFound.page.html',
  styleUrls: ['./notFound.page.scss'],
})
export class NotFoundPage implements OnInit {
  public waitingForRedirect: boolean = true;
  public countdown: number = 30;

  private _timer: any;

  constructor(private _router: Router) {}

  public ngOnInit(): void {
    this._timer = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(this._timer);
        this.RedirectToDashboard();
      }
    }, 1000);
  }

  public AbortRedirection(): void {
    clearInterval(this._timer);
    this.waitingForRedirect = false;
  }

  public RedirectToDashboard(): void {
    this._router.navigate(['/']);
  }
}
