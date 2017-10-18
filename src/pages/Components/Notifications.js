import React, { Component } from 'react';
import NotificationSystem from 'react-notification-system';

class Notifications extends Component {

  showNotification(position) {
    this.notificationSystem.addNotification({
      message: 'Welcome to Crystal Dashboard - a beautiful React dashboard for everyone.',
      level: 'success',
      autoDismiss: 0,
      position
    });
  }

  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="card">
            <div className="header">
              <h4>Notifications</h4>
            </div>
            <div className="content">
              <div className="places-buttons">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 text-center">
                    <h5>Notifications Places
                      <p className="category">Click to view notifications</p>
                    </h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2 col-md-offset-3">
                    <button className="btn btn-default btn-block" onClick={() => this.showNotification('tl')}>Top Left</button>
                  </div>
                  <div className="col-md-2">
                    <button className="btn btn-default btn-block" onClick={() => this.showNotification('tc')}>Top Center</button>
                  </div>
                  <div className="col-md-2">
                    <button className="btn btn-default btn-block" onClick={() => this.showNotification('tr')}>Top Right</button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2 col-md-offset-3">
                    <button className="btn btn-default btn-block" onClick={() => this.showNotification('bl')}>Bottom Left</button>
                  </div>
                  <div className="col-md-2">
                    <button className="btn btn-default btn-block" onClick={() => this.showNotification('bc')}>Bottom Center</button>
                  </div>
                  <div className="col-md-2">
                    <button className="btn btn-default btn-block" onClick={() => this.showNotification('br')}>Bottom Right</button>
                  </div>
                </div>
              </div>

              <NotificationSystem
                ref={ref => this.notificationSystem = ref} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Notifications;