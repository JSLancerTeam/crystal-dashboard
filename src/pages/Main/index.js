import React from 'react';
import { Route, Router } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SideBar from '../../components/SideBar';
import ThemeOptions from '../../components/ThemeOptions';

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

const Main = () => (
  <div>
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
  </div>
);

export default Main;