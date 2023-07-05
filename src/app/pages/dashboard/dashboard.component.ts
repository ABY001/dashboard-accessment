import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public stats: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  ngOnInit() {

    this.datasets = [
      [27, 50, 35, 30, 75, 22, 20, 12, 25],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];
    this.stats = [
      {
        number: '1478 286',
        name: 'Pending Requests',
        rate: '4.07%',
        icon: 'up',
        avatar: 'history',
        color: 'lightpurple'
      },
      {
        number: '478 520',
        name: 'Approved Requests',
        rate: '0.24%',
        icon: 'up',
        avatar: 'check',
        color: 'orange'
      },
      {
        number: '154 872',
        name: 'Total Agents',
        rate: '1.64%',
        icon: 'down',
        avatar: 'train',
        color: 'blue'
      },
      {
        number: '167',
        name: 'Total Users',
        rate: '0.00%',
        icon: 'right',
        avatar: 'users',
        color: 'green'
      },
    ]

    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
      type: 'line',
      options: chartExample1.options,
      data: chartExample1.data
    });
  }


  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

}
