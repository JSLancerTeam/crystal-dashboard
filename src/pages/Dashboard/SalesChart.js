import React from 'react';
import ChartistGraph from 'react-chartist';
import Chartist from 'chartist';

let dataSales = {
  labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
  series: [
    [287, 385, 490, 492, 554, 586, 698, 695, 752, 788, 846, 944],
    [67, 152, 143, 240, 287, 335, 435, 437, 539, 542, 544, 647],
    [23, 113, 67, 108, 190, 239, 307, 308, 439, 410, 410, 509]
  ]
};

let optionsSales = {
  lineSmooth: true,
  low: 0,
  high: 800,
  showArea: true,
  height: "245px",
  axisX: {
    showGrid: false,
  },
  lineSmooth: Chartist.Interpolation.simple({
    divisor: 5
  }),
  showLine: false,
  showPoint: false
};

let responsiveSales = [
  ['screen and (max-width: 640px)', {
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }]
];

const SalesChart = () => (
  <div className="card">
    <div className="header">
      <h4 className="title">Users Behavior</h4>
      <p className="category">24 Hours performance</p>
    </div>
    <div className="content">
      <ChartistGraph data={dataSales} options={optionsSales} responsiveOptions={responsiveSales} type="Line" className="ct-chart" />
    </div>
    <div className="footer">
      <div className="legend">
        <div className="item">
          <i className="fa fa-circle text-info"></i> Open
        </div>
        <div className="item">
          <i className="fa fa-circle text-danger"></i> Click
        </div>
        <div className="item">
          <i className="fa fa-circle text-warning"></i> Click Second Time
        </div>
      </div>
      <hr />
      <div className="stats">
        <i className="fa fa-history"></i> Updated 3 minutes ago
          </div>
    </div>
  </div>
);

export default SalesChart;