import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { NotFoundPage } from './pages/notfound/notfound.page';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BalanceOverviewComponent } from './components/balanceOverview/balanceOverview.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPage,
    NotFoundPage,
    BalanceOverviewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ButtonModule, RippleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
