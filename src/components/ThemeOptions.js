import React, { Component } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { setBackgroundColor, setBackgroundImage, setEnableBackgroundImage } from '../reducers/ThemeOptions';
import sideBar1 from '../assets/images/sidebar-1.jpg';
import sideBar3 from '../assets/images/sidebar-3.jpg';
import sideBar4 from '../assets/images/sidebar-4.jpg';
import sideBar5 from '../assets/images/sidebar-5.jpg';

class ThemeOptions extends Component {

  state = {
    isShowingDropdown: false
  }

  componentDidMount() {
    window.addEventListener('click', this.hideDropdown);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.hideDropdown);
  }

  hideDropdown = () => {
    this.setState({
      isShowingDropdown: false
    });
  }

  toggleDropdown = () => {
    this.setState({
      isShowingDropdown: !this.state.isShowingDropdown
    });
  }

  toggleEnableBackgroundImage = () => {
    let { enableBackgroundImage, setEnableBackgroundImage } = this.props;
    setEnableBackgroundImage(!enableBackgroundImage);
  }

  render() {
    let {
      backgroundColor,
      backgroundImage,
      enableBackgroundImage,
      setBackgroundColor,
      setBackgroundImage
    } = this.props;
    let { isShowingDropdown } = this.state;
    return (
      <div className="fixed-plugin" onClick={e => e.stopPropagation()}>
        <div className={cx("dropdown show-dropdown", {
          open: isShowingDropdown
        })}>
          <a data-toggle="dropdown" aria-expanded="false" onClick={e => {
            e.stopPropagation();
            this.toggleDropdown();
          }}>
            <i className="fa fa-cog fa-2x"> </i>
          </a>
          <ul className="dropdown-menu">
            <li className="header-title">Sidebar Style</li>
            <li className="adjustments-line">
              <a href="javascript:void(0)" className="switch-trigger">
                <p>Background Image</p>
                <div className="switch has-switch" data-on-label="ON" data-off-label="OFF" onClick={this.toggleEnableBackgroundImage}>
                  <div className={cx("switch-animate", {
                    'switch-on': enableBackgroundImage,
                    'switch-off': !enableBackgroundImage
                  })}>
                    <input type="checkbox" checked="" /><span className="switch-left">ON</span><label>&nbsp;</label><span className="switch-right">OFF</span>
                  </div>
                </div>
                <div className="clearfix"></div>
              </a>
            </li>
            <li className="adjustments-line">
              <a href="javascript:void(0)" className="switch-trigger">
                <p>Filters</p>
                <div className="pull-right">
                  <span className={cx("badge filter", {active: backgroundColor === 'black'})}
                        onClick={() => setBackgroundColor("black")}></span>
                  <span className={cx("badge filter badge-azure", {active: backgroundColor === 'azure'})}
                        onClick={() => setBackgroundColor("azure")}></span>
                  <span className={cx("badge filter badge-green", {active: backgroundColor === 'green'})}
                        onClick={() => setBackgroundColor("green")}></span>
                  <span className={cx("badge filter badge-orange", {active: backgroundColor === 'orange'})}
                        onClick={() => setBackgroundColor("orange")}></span>
                  <span className={cx("badge filter badge-red", {active: backgroundColor === 'red'})}
                        onClick={() => setBackgroundColor("red")}></span>
                  <span className={cx("badge filter badge-purple active", {active: backgroundColor === 'purple'})}
                        onClick={() => setBackgroundColor("purple")}></span>
                </div>
                <div className="clearfix"></div>
              </a>
            </li>
            <li className="header-title">Sidebar Images</li>
            <li className={cx({active: backgroundImage === sideBar1})}>
              <a className="img-holder switch-trigger" onClick={() => setBackgroundImage(sideBar1)}>
                <img src={sideBar1} />
              </a>
            </li>
            <li className={cx({active: backgroundImage === sideBar3})}>
              <a className="img-holder switch-trigger" onClick={() => setBackgroundImage(sideBar3)}>
                <img src={sideBar3} />
              </a>
            </li>
            <li className={cx({active: backgroundImage === sideBar4})}>
              <a className="img-holder switch-trigger" onClick={() => setBackgroundImage(sideBar4)}>
                <img src={sideBar4} />
              </a>
            </li>
            <li className={cx({active: backgroundImage === sideBar5})}>
              <a className="img-holder switch-trigger" onClick={() => setBackgroundImage(sideBar5)}>
                <img src={sideBar5} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  enableBackgroundImage: state.ThemeOptions.enableBackgroundImage,
  backgroundColor: state.ThemeOptions.backgroundColor,
  backgroundImage: state.ThemeOptions.backgroundImage
});

const mapDispatchToProps = dispatch => ({
  setEnableBackgroundImage: enable => dispatch(setEnableBackgroundImage(enable)),
  setBackgroundColor: color => dispatch(setBackgroundColor(color)),
  setBackgroundImage: image => dispatch(setBackgroundImage(image))
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeOptions);
