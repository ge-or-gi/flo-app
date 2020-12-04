/** @format */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'customer-detail',
    loadChildren: () =>
      import('./pages/customer-detail/customer-detail.module').then(
        (m) => m.CustomerDetailModule
      ),
  },
  {
    path: 'account-details',
    loadChildren: () =>
      import('./pages/account-details/account-details.module').then(
        (m) => m.AccountDetailsModule
      ),
  },
  { path: '', pathMatch: 'full', redirectTo: 'customer-detail' },
  { path: '**', redirectTo: 'customer-detail' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
