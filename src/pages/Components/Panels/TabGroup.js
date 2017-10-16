import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

const TabGroup = () => (
  <div className="row">
    <div className="col-md-6">
      <div className="card">
        <div className="header">
          <h4 className="title">Tabs</h4>
          <p className="category">Plain text tabs</p>
        </div>
        <div className="content">
          <Tabs defaultActiveKey={1} id="plan-text-tabs">
            <Tab eventKey={1} title="Tab 1">Agency is a group of professional individuals looking to create amazing pieces of clothing. We have studied at the best schools of design, we have tailored the suits for the most stylish men in the industry, we are what you need!</Tab>
            <Tab eventKey={2} title="Tab 2">We are Houses Inc., a group of architects and interior designers based in Chicago and operating for clients worldwide. We’ve been designing stunningly beautiful houses and making clients happy for years.</Tab>
            <Tab eventKey={3} title="Tab 3">Explore a wide variety of styles, personalise your finishes, and let us design the perfect home for you. It's what we do best and you can see proof in the products and reviews below.</Tab>
          </Tabs>
        </div>
      </div>
    </div>

    <div className="col-md-6">
      <div className="card">
        <div className="header">
          <h4 className="title">Tabs &amp; Icons</h4>
          <p className="category">Tabs with icons and full width</p>
        </div>
        <div className="content content-full-width">
          <Tabs defaultActiveKey={1} id="tab-with-icons">
            <Tab eventKey={1} title={<span><i className="fa fa-info"></i> Info</span>}>Agency is a group of professional individuals looking to create amazing pieces of clothing. We have studied at the best schools of design, we have tailored the suits for the most stylish men in the industry, we are what you need!</Tab>
            <Tab eventKey={2} title={<span><i className="fa fa-user"></i> Account</span>}>We are Houses Inc., a group of architects and interior designers based in Chicago and operating for clients worldwide. We’ve been designing stunningly beautiful houses and making clients happy for years.</Tab>
            <Tab eventKey={3} title={<span><i className="fa fa-cube"></i> Style</span>}>Explore a wide variety of styles, personalise your finishes, and let us design the perfect home for you. It's what we do best and you can see proof in the products and reviews below.</Tab>
          </Tabs>
        </div>
      </div>
    </div>

  </div>
);

export default TabGroup;