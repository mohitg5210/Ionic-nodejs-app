import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }
  addTransaction(transaction: Transaction): Observable<any> {
    return this.http.post<Transaction>('http://localhost:3000/api/create', transaction, this.httpOptions)
      .pipe(
        catchError(this.handleError<Transaction>('Add Transaction'))
      );
  }

  getTransactionList(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>('http://localhost:3000/api')
      .pipe(
        tap(songs => console.log('Transactions fetched!')),
        catchError(this.handleError<Transaction[]>('Get Transactions', []))
      );
  }
 
  getLastTransaction(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>('http://localhost:3000/api/get-transaction')
      .pipe(
        tap(songs => console.log('Transactions fetched!')),
        catchError(this.handleError<Transaction[]>('Get Transactions', []))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}