import React, { Component } from 'react';
import { Table, Column, Cell, Tex } from 'fixed-data-table';
import 'fixed-data-table/dist/fixed-data-table.css';
import generateData from '../generateData';

const data = generateData(1000);

class FixedDataTable extends Component {

  state = {
    data: generateData(10000, false),
    tableWidth: 1000
  };

  componentDidMount() {
    let bound = this.container.getBoundingClientRect();
    this.setState({
      tableWidth: (bound.width - 40)
    });
  }

  removeItem = itemId => {
    this.setState({
      data: data.filter(item => item.id !== itemId)
    });
  }

  render() {
    let { data, tableWidth } = this.state;
    let idWidth = 60;
    let columnWidth = (tableWidth - idWidth) / 5;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card" ref={container => this.container = container}>
              <div className="header">
                <h3>Fixed Data Table</h3>
              </div>
              <div className="content">
                <Table
                  rowHeight={50}
                  rowsCount={data.length}
                  width={tableWidth}
                  height={500}
                  headerHeight={50}>
                  <Column
                    header={<Cell>ID</Cell>}
                    cell={({ rowIndex, ...props }) => (
                      <Cell>{data[rowIndex].id}</Cell>
                    )}
                    width={idWidth}
                  />
                  <Column
                    header={<Cell>Name</Cell>}
                    cell={({ rowIndex, ...props }) => (
                      <Cell {...props}>{data[rowIndex].name}</Cell>
                    )}
                    width={columnWidth}
                  />
                  <Column
                    header={<Cell>Description</Cell>}
                    cell={({ rowIndex, ...props }) => (
                      <Cell>{data[rowIndex].description}</Cell>
                    )}
                    width={columnWidth}
                  />
                  <Column
                    header={<Cell>Position</Cell>}
                    cell={({ rowIndex, ...props }) => (
                      <Cell>{data[rowIndex].job}</Cell>
                    )}
                    width={columnWidth}
                  />
                  <Column
                    header={<Cell>Salary</Cell>}
                    cell={({ rowIndex, ...props }) => (
                      <Cell>{data[rowIndex].salary}</Cell>
                    )}
                    width={columnWidth}
                  />
                  <Column
                    header={<Cell></Cell>}
                    cell={({ rowIndex, ...props }) => (
                      <Cell>
                        <i className="fa fa-remove" onClick={() => this.removeItem(data[rowIndex].id)}></i>
                      </Cell>
                    )}
                    width={columnWidth}
                  />
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
export default FixedDataTable