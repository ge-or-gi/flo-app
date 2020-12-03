import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerDetailRoutingModule } from './customer-detail-routing.module';
import { CustomerDetailComponent } from './customer-detail.component';
import { SharedModule } from '../../shared/shared.module';
import { SuggestionsComponent } from './suggestions/suggestions.component';


@NgModule({
  declarations: [CustomerDetailComponent, SuggestionsComponent],
  imports: [
    CommonModule,
    CustomerDetailRoutingModule,
    SharedModule
  ]
})
export class CustomerDetailModule { }
