import React, { Component } from 'react';
import generateData from '../generateData';
import Switch from 'components/Switch';

class TableWithSwitch extends Component {
  state = {
    items: generateData()
  };

  toggleActive = itemId => {
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === itemId) {
          item.active = !item.active;
        }
        return item;
      })
    });
  }

  render() {
    let { items } = this.state;
    return (
      <div className="card">
        <div className="header">
          <h4 className="title">Table with Switches</h4>
          <p className="category">Here is a subtitle for this table</p>
        </div>
        <div className="content table-responsive table-full-width">
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Position</th>
                <th className="text-right">Salary</th>
                <th>Active</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.job}</td>
                  <td className="text-right">$ {item.salary}</td>
                  <td>
                    <Switch value={item.active} onChange={() => this.toggleActive(item.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    )
  }
}

export default TableWithSwitch;