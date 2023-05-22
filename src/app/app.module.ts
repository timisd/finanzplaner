import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardPage } from './pages/dashboard/dashboard.page';
import { NotFoundPage } from './pages/notfound/notfound.page';

import { BalanceOverviewComponent } from './components/balanceOverview/balanceOverview.component';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { IncomePage } from './pages/income/income.page';
import { ExpensePage } from './pages/expense/expense.page';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPage,
    NotFoundPage,
    BalanceOverviewComponent,
    IncomePage,
    ExpensePage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    RippleModule,
    TooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
