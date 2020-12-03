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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
