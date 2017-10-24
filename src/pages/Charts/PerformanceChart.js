import React from 'react';
import ReactChartist from 'react-chartist';
import Chartist from 'chartist';

const dataPerformance = {
  labels: ['6pm','9pm','11pm', '2am', '4am', '8am', '2pm', '5pm', '8pm', '11pm', '4am'],
  series: [
    [1, 6, 8, 7, 4, 7, 8, 12, 16, 17, 14, 13]
  ]
};

const optionsPerformance = {
  showPoint: false,
  lineSmooth: true,
  height: "260px",
  axisX: {
    showGrid: false,
    showLabel: true
  },
  axisY: {
    offset: 40,
  },
  low: 0,
  high: 16
};

const PerformanceChart = () => (
  <div className="card">
    <div className="header">
      <h4>24 Hours Performance</h4>
      <p className="category">Line Chart</p>
    </div>
    <div className="content">
      <ReactChartist data={dataPerformance} options={optionsPerformance} type="Line" className="ct-chart" />
    </div>
  </div>
);

export default PerformanceChart;