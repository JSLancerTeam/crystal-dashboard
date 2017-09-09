import React from 'react';
import { Route, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import cx from 'classnames';
import { setMobileNavVisibility } from '../../reducers/Layout';
import Header from './Header';
import Footer from './Footer';
import SideBar from '../../components/SideBar';
import ThemeOptions from '../../components/ThemeOptions';
import MobileMenu from '../../components/MobileMenu';
/**
 * Pages
 */
import Dashboard from '../Dashboard';
import UserProfile from '../UserProfile';
import TableList from '../TableList';
import Typography from '../Typography';
import Icons from '../Icons';
import MapsPage from '../MapsPage';
import Notifications from '../Notifications';
import { withRouter } from 'react-router-dom';
const Main = ({
  mobileNavVisibility,
  hideMobileMenu,
  history
}) => {
  history.listen(() => {
    if (mobileNavVisibility === true) {
      hideMobileMenu();
    }
  });
  return (
    <div className={cx({
      'nav-open': mobileNavVisibility === true
    })}>
      <div className="wrapper">
        <SideBar />
        <ThemeOptions />

        <div className="main-panel">
          <Header />
          <Route exact path="/" component={Dashboard} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/table" component={TableList} />
          <Route path="/typography" component={Typography} />
          <Route path="/icons" component={Icons} />
          <Route path="/map" component={MapsPage} />
          <Route path="/notifications" component={Notifications} />
          <Footer />
        </div>
      </div>
      <MobileMenu />
    </div>
  )
};

const mapStateToProp = state => ({
  mobileNavVisibility: state.Layout.mobileNavVisibility
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  hideMobileMenu: () => dispatch(setMobileNavVisibility(false))
});

export default withRouter(connect(mapStateToProp, mapDispatchToProps)(Main));