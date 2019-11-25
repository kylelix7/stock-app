import { Component, OnInit } from '@angular/core';
import { StockDataService } from './stock-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  requested: boolean = false;
  constructor(private stockDataService: StockDataService) {

  }
  ngOnInit(): void {
    this.stockDataService.getStaticData('SPY');
  }
  title = 'stock-app';
}
