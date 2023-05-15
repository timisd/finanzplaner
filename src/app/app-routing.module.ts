import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardPage} from "./pages/dashboard/dashboard.page";
import {NotFoundPage} from "./pages/notfound/notfound.page";

const routes: Routes = [
  { path: '', component: DashboardPage },
  { path: '**', component: NotFoundPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
