import React from 'react';

const PlainBackgroundTable = ({data}) => (
  <div className="card card-plain">
    <div className="header">
      <h4 className="title">Table on Plain Background</h4>
      <p className="category">Here is a subtitle for this table</p>
    </div>
    <div className="content table-responsive table-full-width">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Country</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>$ {item.salary}</td>
            <td>{item.country}</td>
            <td>{item.city}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default PlainBackgroundTable;