import { Injectable } from '@angular/core';

@Injectable()
export class StockService {
  stocks: any[];
  apikey: string = "QS9W4NO731ZGBQIC";
  urlStock: string = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=${apikey}`;

  constructor() {}
}
