import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

//Service
import {StockService} from './services/stock.service'


import { AppComponent } from './app.component';
import { StocksComponent } from './components/stocks/stocks.component';


@NgModule({
  declarations: [
    AppComponent,
    StocksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
