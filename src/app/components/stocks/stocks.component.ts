import { Component, OnInit } from '@angular/core';
import {StockService} from '../../services/stock.service'

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html'
})
export class StocksComponent implements OnInit {

  stock: any = {};

  constructor(private _stock:StockService) { }

  ngOnInit() {
  }

  

}
