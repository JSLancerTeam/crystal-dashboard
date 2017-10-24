import React from 'react';
import ChartistGraph from 'react-chartist';


// Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

// Chartist.Pie('#chartPreferences', {
// labels: ['62%','32%','6%'],
// series: [62, 32, 6]
// });
const EmailStatistic = () => {

  let dataPreferences = {
    labels: ['62%', '32%', '6%'],
    series: [62, 32, 6]
  };

  let optionsPreferences = {
    donut: false,
    donutWidth: 40,
    startAngle: 0,
    total: 100,
    showLabel: true,
    axisX: {
      showGrid: false,
      offset: 0
    },
    axisY: {
      offset: 0
    }
  };

  let chartType = 'Pie';

  return (

    <div className="card">
      <div className="header">
        <h4 className="title">Email Statistics</h4>
        <p className="category">Last Campaign Performance</p>
      </div>
      <div className="content">

        <ChartistGraph data={dataPreferences} options={optionsPreferences} type={chartType} className={'ct-chart ct-perfect-fourth'} />


      </div>
      <div className="footer">
        <div className="legend">
          <div className="item">
            <i className="fa fa-circle text-info"></i> Open
          </div>
          <div className="item">
            <i className="fa fa-circle text-danger"></i> Bounce
          </div>
          <div className="item">
            <i className="fa fa-circle text-warning"></i> Unsubscribe
          </div>
        </div>
        <hr />
        <div className="stats">
          <i className="fa fa-clock-o"></i> Campaign sent 2 days ago
          </div>
      </div>
    </div>

  );
};

export default EmailStatistic;