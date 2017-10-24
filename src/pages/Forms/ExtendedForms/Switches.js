import React, { Component } from 'react';
import SwitchControl from 'components/Switch';

class Switches extends Component {
  state = {
    defaultSwitch: false,
    plainSwitch: false,
    iconSwitch: true
  }

  render() {
    let {
      defaultSwitch,
      plainSwitch,
      iconSwitch
    } = this.state;

    return (
      <div className="row">
        <div className="col-md-6">
          <legend>Switches</legend>
          <div className="col-md-4">
            <p>Regular:</p>
            <SwitchControl
              value={defaultSwitch}
              onChange={value => this.setState({defaultSwitch: value})} />
          </div>
          <div className="col-md-4">
            <p>Plain:</p>
            <SwitchControl
              value={plainSwitch}
              onChange={value => this.setState({plainSwitch: value})}
              onText="&nbsp;"
              offText="&nbsp;" />
          </div>
          <div className="col-md-4">
            <p>With icons:</p>
            <SwitchControl
              value={iconSwitch}
              onChange={value => this.setState({iconSwitch: value})}
              onText={<i className="fa fa-check"></i>}
              offText={<i className="fa fa-times"></i>}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Switches;