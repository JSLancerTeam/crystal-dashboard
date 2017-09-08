import React from 'react';

const ProfileForm = () => (
  <div className="card">
    <div className="header">
      <h4 className="title">Edit Profile</h4>
    </div>
    <div className="content">
      <form>
        <div className="row">
          <div className="col-md-5">
            <div className="form-group">
              <label>Company (disabled)</label>
              <input type="text" className="form-control" disabled="" placeholder="Company" defaultValue="Creative Code Inc." />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label>Username</label>
              <input type="text" className="form-control" placeholder="Username" defaultValue="michael23" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" placeholder="Email" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" className="form-control" placeholder="Company" defaultValue="Mike" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" className="form-control" placeholder="Last Name" defaultValue="Andrew" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label>Address</label>
              <input type="text" className="form-control" placeholder="Home Address" defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label>City</label>
              <input type="text" className="form-control" placeholder="City" defaultValue="Mike" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Country</label>
              <input type="text" className="form-control" placeholder="Country" defaultValue="Andrew" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Postal Code</label>
              <input type="number" className="form-control" placeholder="ZIP Code" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label>About Me</label>
              <textarea rows="5" className="form-control" placeholder="Here can be your description" defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo." />
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-info btn-fill pull-right">Update Profile</button>
        <div className="clearfix"></div>
      </form>
    </div>
  </div>
);

export default ProfileForm;