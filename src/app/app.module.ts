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
  CashflowDialogComponent,
} from './components';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

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
    CashflowDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    RippleModule,
    TooltipModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
