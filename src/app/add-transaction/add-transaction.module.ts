import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AddTransactionPageRoutingModule } from './add-transaction-routing.module';

import { AddTransactionPage } from './add-transaction.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AddTransactionPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AddTransactionPage]
})
export class AddtransactionPageModule { }
