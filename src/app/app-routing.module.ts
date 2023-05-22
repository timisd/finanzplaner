import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { NotFoundPage } from './pages/notfound/notfound.page';
import { IncomePage } from './pages/income/income.page';
import { ExpensePage } from './pages/expense/expense.page';

const routes: Routes = [
  { path: '', component: DashboardPage },
  { path: 'einnahmen', component: IncomePage },
  { path: 'ausgaben', component: ExpensePage },
  { path: '**', component: NotFoundPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
