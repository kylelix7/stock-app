import { Injectable } from '@angular/core';
import { HistoricalData } from './models';
import { throwError, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {
  public historicalData: Subject<HistoricalData[]> = new Subject();

  public selectedSubject : Subject<string> = new Subject();

  constructor(private http: HttpClient) { }

  getStaticData(selected: string): void {
    
    const url = `https://looc4watn6.execute-api.us-west-2.amazonaws.com/prod/price?ticker=${selected}`;
    this.http.get<any>(url, {})
      .pipe(
        catchError((e) => this.handleError(e))
      ).subscribe((response)=> {
        console.log("calling historicalData.next ");
        this.historicalData.next(response as (HistoricalData[]));
      });
  }

  private handleError(error: HttpErrorResponse) {
    console.log('error', error);
    // return an observable with a user-facing error message
    return throwError(
      'Internal Error.');
  };
}
