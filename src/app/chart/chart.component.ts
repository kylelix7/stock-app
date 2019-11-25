import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StockDataService } from '../stock-data.service';
import { HistoricalData } from '../models';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent {
  
  historicalData: Observable<HistoricalData[]> = this.stockDataService.historicalData;
  single: any[];
  multi: any[];

  view: any[] = [800, 360];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private stockDataService: StockDataService, private changeDetectorRef: ChangeDetectorRef) {
    this.historicalData.subscribe((resp)=> {
      this.single = resp;
      this.changeDetectorRef.detectChanges();
    });
  }

  public onSelect(event): void {

  }

  public onRefresh(): void {
    
  }
  
}
