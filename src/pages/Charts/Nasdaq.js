import React from 'react';
import ReactChartist from 'react-chartist';
import Chartist from 'chartist';

const dataStock = {
  labels: ['\'07','\'08','\'09', '\'10', '\'11', '\'12', '\'13', '\'14', '\'15'],
  series: [
    [22.20, 34.90, 42.28, 51.93, 62.21, 80.23, 62.21, 82.12, 102.50, 107.23]
  ]
};

const optionsStock = {
  lineSmooth: false,
  height: "260px",
  axisY: {
    offset: 40,
    labelInterpolationFnc: function(value) {
        return '$' + value;
      }

  },
  low: 10,
  high: 110,
    classNames: {
      point: 'ct-point ct-green',
      line: 'ct-line ct-green'
  }
};

const Nasdaq = () => (
  <div className="card">
    <div className="header">
      <h4>NASDAQ: AAPL</h4>
      <p className="category">Line Chart with Points</p>
    </div>
    <div className="content">
      <ReactChartist data={dataStock} options={optionsStock} type="Line" className="ct-chart" />
    </div>
  </div>
);

export default Nasdaq;