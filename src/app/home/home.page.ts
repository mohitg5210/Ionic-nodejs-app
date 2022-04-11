import { Component, OnInit } from '@angular/core';
import { TransactionService } from './../shared/transaction.service';
import { ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Data {
  movies: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {
  public data: Data;
  public columns: any;
  public rows: any;
  constructor(
    private transactionAPI: TransactionService
  ) {
    this.columns = [
      { name: 'TransactionDate' },
      { name: 'Description' },
      { name: 'Type' },
      { name: 'Amount' },
      { name: 'Balance' }
    ];
  }
  ngOnInit() { }
  ionViewDidEnter() {
    this.getTransactionData()
  }
  getTransactionData(){
    this.transactionAPI.getTransactionList().subscribe((res) => {
      this.rows = res;
    })
  }
}