import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage, ExpensePage, IncomePage, NotFoundPage } from './pages';

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
