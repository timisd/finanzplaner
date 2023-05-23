import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage, CashflowPage, NotFoundPage } from './pages';

const routes: Routes = [
  { path: '', component: DashboardPage },
  { path: 'cashflow', component: CashflowPage },
  { path: '**', component: NotFoundPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
