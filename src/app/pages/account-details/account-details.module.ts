import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountDetailsRoutingModule } from './account-details-routing.module';
import { AccountDetailsComponent } from './account-details.component';
import { SharedModule } from '../../shared/shared.module';
import { AccountHistoryComponent } from './account-history/account-history.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { AccountFeedbackComponent } from './account-feedback/account-feedback.component';


@NgModule({
  declarations: [AccountDetailsComponent, AccountHistoryComponent, AccountSettingsComponent, AccountFeedbackComponent],
  imports: [
    CommonModule,
    AccountDetailsRoutingModule,
    SharedModule
  ]
})
export class AccountDetailsModule { }
