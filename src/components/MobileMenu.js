import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import backgroundImage from '../assets/images/sidebar-5.jpg';

const MobileMenu = ({
  location,
  backgroundColor,
  backgroundImage
}) => (
  <div>
    <div className="mobile-nav collapse navbar-collapse has-image"
      data-color={backgroundColor}
      style={{
        backgroundImage: `url(${backgroundImage}`
      }}>
      <div className="logo">
        <a href="http://jslancer.com" className="simple-text">
          JSLancer
      </a>
      </div>
      <ul className="nav navbar-nav">
        <li className={location.pathname === '/' ? 'active' : null}>
          <Link to="/">
            <i className="pe-7s-graph"></i>
            <p>Dashboard</p>
          </Link>
        </li>
        <li className={location.pathname === '/profile' ? 'active' : null}>
          <Link to="/profile">
            <i className="pe-7s-user"></i>
            <p>User Profile</p>
          </Link>
        </li>
        <li className={location.pathname === '/table' ? 'active' : null}>
          <Link to="/table">
            <i className="pe-7s-note2"></i>
            <p>Table List</p>
          </Link>
        </li>
        <li className={location.pathname === '/typography' ? 'active' : null}>
          <Link to="typography">
            <i className="pe-7s-news-paper"></i>
            <p>Typography</p>
          </Link>
        </li>
        <li className={location.pathname === '/icons' ? 'active' : null}>
          <Link to="/icons">
            <i className="pe-7s-science"></i>
            <p>Icons</p>
          </Link>
        </li>
        <li className={location.pathname === '/map' ? 'active' : null}>
          <Link to="/map">
            <i className="pe-7s-map-marker"></i>
            <p>Maps</p>
          </Link>
        </li>
        <li className={location.pathname === '/notifications' ? 'active' : null}>
          <Link to="notifications">
            <i className="pe-7s-bell"></i>
            <p>Notifications</p>
          </Link>
        </li>
      </ul>
    </div>
  </div>
);


const mapStateToProps = state => ({
  enableBackgroundImage: state.ThemeOptions.enableBackgroundImage,
  backgroundColor: state.ThemeOptions.backgroundColor,
  backgroundImage: state.ThemeOptions.backgroundImage
});

export default withRouter(
  connect(mapStateToProps)(MobileMenu)
);