import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class StockService {

  symbol: any = [];
  stocks: any[];
  apikey: string = "QS9W4NO731ZGBQIC";
  urlStock: string = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=QS9W4NO731ZGBQIC`;

  constructor(public http: HttpClient) {
    console.log('Service Running..')
  }

  
  getStock(){
    let url = this.urlStock;
    return this.http.get(url);
  }





}
