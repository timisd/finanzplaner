import { Component, OnDestroy, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { BalanceDto } from '../../models';
import { BalanceService } from '../../services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-balance-overview',
  templateUrl: './balanceOverview.component.html',
  styleUrls: ['./balanceOverview.component.scss'],
})
export class BalanceOverviewComponent implements OnInit, OnDestroy {
  private _subscription: Subscription | undefined;
  private _chart: Chart | undefined;

  constructor(private _balanceService: BalanceService) {}

  ngOnInit() {
    this._subscription = this._balanceService.Balances$.subscribe(
      (data: BalanceDto[]) => {
        this.generateChart(data);
        console.info('neue Daten');
      }
    );
  }

  ngOnDestroy() {
    this._subscription?.unsubscribe();
  }

  private generateChart(data: BalanceDto[]): void {
    if (this._chart) {
      this._chart.destroy();
    }

    if (data.length > 30) {
      const index = data.length - 30;
      data = data.slice(index);
    }

    const chartLabels: string[] = data.map((element: BalanceDto) =>
      element.Date.toDateString()
    );
    const chartValues: number[] = data.map(
      (element: BalanceDto) => element.Balance
    );

    const chartData = {
      labels: chartLabels,
      datasets: [
        {
          label: 'Kontostand',
          data: chartValues,
          backgroundColor: '#f4f4f9',
          borderColor: '#54f0e7',
          borderWidth: 2,
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      scales: {
        y: {
          grid: {
            color: 'rgba(0, 0, 0, 1)',
            lineWidth: 1,
          },
          ticks: {
            color: '#f4f4f9',
          },
        },
        x: {
          grid: {
            color: 'rgba(0, 0, 0, 1)',
            lineWidth: 1,
          },
          ticks: {
            display: false,
          },
        },
      },
    };

    this._chart = new Chart('balanceChart', {
      type: 'line',
      data: chartData,
      options: chartOptions,
    });
  }
}
