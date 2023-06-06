import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardPage, CashflowPage, NotFoundPage } from './pages';
import {
  BalanceOverviewComponent,
  TitleBarComponent,
  CashflowCardNormalComponent,
  CashflowCardSlimComponent,
} from './components';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPage,
    NotFoundPage,
    BalanceOverviewComponent,
    CashflowPage,
    TitleBarComponent,
    CashflowCardNormalComponent,
    CashflowCardSlimComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    RippleModule,
    TooltipModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
