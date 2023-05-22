import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { BalanceDto } from '../../DTOs/balance.dto';

@Component({
  selector: 'app-balance-overview',
  templateUrl: './balanceOverview.component.html',
  styleUrls: ['./balanceOverview.component.scss'],
})
export class BalanceOverviewComponent implements OnInit {
  @Input() public chartData: BalanceDto[] = [];

  private _chart: any;

  ngOnInit() {
    const chartLabels: string[] = this.chartData.map((element: BalanceDto) =>
      element.Day.toDateString()
    );
    const chartValues: number[] = this.chartData.map(
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
