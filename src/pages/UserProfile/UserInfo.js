import React from 'react';
import profileImage from '../../assets/images/faces/face-3.jpg';
const UserInfo = () => (
  <div className="card card-user">
    <div className="image">
      <img src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&amp;fm=jpg&amp;h=300&amp;q=75&amp;w=400" alt="..." />
    </div>
    <div className="content">
      <div className="author">
        <a href="#">
          <img className="avatar border-gray" src={profileImage} alt="Mike Andrew" />

          <h4 className="title">
            Mike Andrew<br />
            <small>michael24</small>
          </h4>
        </a>
      </div>
      <p className="description text-center">
        "Lamborghini Mercy <br />
        Your chick she so thirsty <br />
        I'm in that two seat Lambo"
      </p>
    </div>
    <hr />
    <div className="text-center">
      <button href="#" className="btn btn-simple"><i className="fa fa-facebook-square"></i></button>
      <button href="#" className="btn btn-simple"><i className="fa fa-twitter"></i></button>
      <button href="#" className="btn btn-simple"><i className="fa fa-google-plus-square"></i></button>
    </div>
  </div>
);

export default UserInfo;