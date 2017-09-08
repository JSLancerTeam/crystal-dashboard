import React, { Component } from 'react';
import cx from 'classnames';

class Tasks extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: 'Sign contract for "What are conference organizers afraid of?"',
        completed: true
      },
      {
        id: 2,
        content: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
        completed: true
      },
      {
        id: 3,
        content: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit	',
        completed: true
      },
      {
        id: 4,
        content: 'Create 4 Invisible User Experiences you Never Knew About',
        completed: false
      },
      {
        id: 5,
        content: 'Read "Following makes Medium better"	',
        completed: false
      },
      {
        id: 6,
        content: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
        completed: false
      }
    ]
  };

  toggleComplete = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) todo.completed = !todo.completed;
        return todo;
      })
    });
  }

  deleteTodo = todoId => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== todoId)
    });
  }

  render() {
    return (
      <div className="card ">
        <div className="header">
          <h4 className="title">Tasks</h4>
          <p className="category">Backend development</p>
        </div>
        <div className="content">
          <div className="table-responsive table-full-width">
            <table className="table">
              <tbody>
                {this.state.todos.map(todo => (
                  <tr key={todo.id}>
                    <td>
                      <label className={cx('checkbox', {
                        'checked': todo.completed === true
                      })}>
                        <span className="icons">
                          <span className="first-icon fa fa-square-o"></span>
                          <span className="second-icon fa fa-check-square-o"></span>
                        </span>
                        <input type="checkbox" value="" data-toggle="checkbox" onClick={() => this.toggleComplete(todo.id)} />
                      </label>
                    </td>
                    <td>{todo.content}</td>
                    <td className="td-actions text-right">
                      <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove" onClick={() => this.deleteTodo(todo.id)}>
                        <i className="fa fa-times"></i>
                      </button>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>

          <div className="footer">
            <hr />
            <div className="stats">
              <i className="fa fa-history"></i> Updated 3 minutes ago
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tasks;