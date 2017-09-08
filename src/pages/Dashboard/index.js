import React from 'react';
import EmailChart from './EmailChart';
import SalesChart from './SalesChart';
import UserBehaviorChart from './UserBehaviorChart';
import Tasks from './Tasks';

const Dashboard = () => (
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <EmailChart />
        </div>
        <div className="col-md-8">
          <SalesChart />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <UserBehaviorChart />
        </div>
        <div className="col-md-6">
          <Tasks />
        </div>
      </div>

    </div>
  </div>
);

export default Dashboard;