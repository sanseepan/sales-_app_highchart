import { Component } from '@angular/core';
import * as Highcharts from "highcharts/highstock";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'highchart-salesApp';
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    title: {
      text: 'highchart-salesApp'
    },

  yAxis: {
        title: {
          text: "Sales"
        },
},

tooltip: {
  valueSuffix: '$'
},
series: [
    {
      name: 'Sales',
      data: [
        [1980, 14000],
        [1985, 22000],
        [1990, 104000],
        [1995,  87000],
        [2000, 43400],
      ],
    },
  ]   
  }
}
