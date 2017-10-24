import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

class VectorMap extends Component {
  state = {
    viewport: {
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8,
      bearing: 0,
      pitch: 0,
      width: 500,
      height: 500
    }
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    let size = this.container.getBoundingClientRect();
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: size.width - 30,
        height: size.height
      }
    });
  }

  _onViewportChange = viewport => this.setState({viewport});

  render() {
    let { width, height } = this.state;
    return (
      <div
        className="card"
        style={{width: '100%', height: '100%', 'box-sizing': 'border-box'}}
        ref={container => this.container = container}>
        <div className="header">
          <h4>Vector Map</h4>
        </div>
        <div className="content">
          <ReactMapGL
            {...this.state.viewport}
            onViewportChange={this._onViewportChange} />
        </div>
      </div>
    )
  }
}

export default VectorMap;