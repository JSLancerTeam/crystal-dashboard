
import React, { Component } from 'react';
import { renderToStaticMarkup } from 'react-dom/server'
import Alert from 'sweetalert-react';

export default class SweetAlert extends Component {
  state = {};

  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="card card-plain">
            <div className="header">
              <h4 className="title">Sweet Alert</h4>
              <p className="category">A beautiful plugin, that replace the classic alert. Please check out the <a href="https://github.com/chentsulin/sweetalert-react" target="_blank">full documentation.</a></p>
            </div>
            <div className="content">
              <div className="places-sweet-alerts">
                <div className="row">
                  <div className="col-md-3">
                    <div className="card">
                      <div className="content text-center">
                        <h5>Basic example</h5>
                        <button className="btn btn-default btn-fill" onClick={() => this.setState({message1: true})}>Try me!</button>

                        <Alert
                          title=""
                          show={this.state.message1}
                          text="Here's a message!"
                          onConfirm={() => this.setState({ message1: false })} />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="card">
                      <div className="content text-center">
                        <h5>A title with a text under</h5>
                        <button className="btn btn-default btn-fill" onClick={() => this.setState({message2: true})}>Try me!</button>
                        <Alert
                          title="Here's a message!"
                          show={this.state.message2}
                          text="It's pretty, isn't it?"
                          onConfirm={() => this.setState({ message2: false })} />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="card">
                      <div className="content text-center">
                        <h5>A success message</h5>
                        <button className="btn btn-default btn-fill" onClick={() => this.setState({message3: true})}>Try me!</button>
                        <Alert
                          title="Good job!"
                          show={this.state.message3}
                          text="You clicked the button!"
                          type="success"
                          onConfirm={() => this.setState({ message3: false })} />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="card">
                      <div className="content text-center">
                        <h5>Custom HTML description</h5>
                        <button className="btn btn-default btn-fill" onClick={() => this.setState({message4: true})}>Try me!</button>
                        <Alert
                          title="HTML example"
                          show={this.state.message4}
                          html
                          text={renderToStaticMarkup(<div>You can use <strong>bold text</strong>, <a>links</a> and other HTML tags</div>)}
                          onConfirm={() => this.setState({ message4: false })} />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="card">
                      <div className="content text-center">
                        <h5>A warning message, with a function attached to the "Confirm" Button...</h5>
                        <button className="btn btn-default btn-fill" onClick={() => this.setState({message5: true})}>Try me!</button>
                        <Alert
                          title="Are you sure?"
                          show={this.state.message5}
                          text="You will not be able to recover this imaginary file!"
                          showCancelButton
                          onConfirm={() => this.setState({ showDeleteSuccessAlert: true })}
                          onCancel={() => this.setState({ message5: true })} />

                        <Alert
                          title="Deleted"
                          show={this.state.showDeleteSuccessAlert}
                          text="Your imaginary file has been deleted."
                          type="success"
                          onConfirm={() => this.setState({ showDeleteSuccessAlert: false })} />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="card">
                      <div className="content text-center">
                        <h5>...and by passing a parameter, you can execute something else for "Cancel"</h5>
                        <button className="btn btn-default btn-fill" onClick={() => this.setState({message6: true})}>Try me!</button>
                        <Alert
                          title="Are you sure?"
                          show={this.state.message6}
                          text="You will not be able to recover this imaginary file!"
                          showCancelButton
                          onConfirm={() => this.setState({ showMessage6SuccessDialog: true })}
                          onCancel={() => this.setState({ showMessage6CancelAlert: true })} />

                        <Alert
                          title="Deleted"
                          show={this.state.showMessage6SuccessDialog}
                          text="Your imaginary file has been deleted."
                          type="success"
                          onConfirm={() => this.setState({ showMessage6SuccessDialog: false })} />

                        <Alert
                          title="Deleted"
                          show={this.state.showMessage6CancelAlert}
                          text="Your imaginary file is not deleted!"
                          type="error"
                          onConfirm={() => this.setState({ showMessage6CancelAlert: false })} />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="card">
                      <div className="content text-center">
                        <h5>A message with auto close timer set to 2 seconds</h5>
                        <button className="btn btn-default btn-fill" onClick={() => {
                          this.setState({message7: true});
                          setTimeout(() => {
                            this.setState({message7: false});
                          }, 2000);
                        }}>Try me!</button>

                        <Alert
                          title="Auto close alert"
                          show={this.state.message7}
                          text="I will close in 2 seconds."
                          onConfirm={() => this.setState({ message7: true })}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="card">
                      <div className="content text-center">
                        <h5>Modal window with input field</h5>
                        <button className="btn btn-default btn-fill" onClick={() => this.setState({message8: true})}>Try me!</button>
                        <Alert
                          title="What's your name?"
                          show={this.state.message8}
                          type="input"
                          inputPlaceholder=""
                          onConfirm={inputValue => this.setState({
                            showMessage8InputAlert: true,
                            username: inputValue
                          })}
                        />
                        <Alert
                          title=""
                          show={this.state.showMessage8InputAlert}
                          text={`Hello ${this.state.username}`}
                          onConfirm={() => this.setState({ showMessage8InputAlert: false })}
                        />
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
