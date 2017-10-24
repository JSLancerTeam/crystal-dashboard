import React, { Component } from 'react';
import Colors from './Colors';
import ButtonStyles from './ButtonStyles';
import ButtonsWithLabel from './ButtonsWithLabel';
import ButtonSizes from './ButtonSizes';
import ButtonGroups from './ButtonGroups';
import Pagination from './Pagination';
import SocialButtons from './SocialButtons';
const ButtonsPage = () => (

    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="row">
              <div className="col-md-6">
                <Colors />
              </div>
              <div className="col-md-6">
                <ButtonStyles />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <ButtonsWithLabel />
              </div>
              <div className="col-md-6">
                <ButtonSizes />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <ButtonGroups />
              </div>
              <div className="col-md-6">
                <Pagination />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <SocialButtons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);

export default ButtonsPage;