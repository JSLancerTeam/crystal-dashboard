import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container-fluid">
      <nav className="pull-left">
        <ul>
          <li>
            <a href="#">
              Home
                  </a>
          </li>
          <li>
            <a href="#">
              Company
                  </a>
          </li>
          <li>
            <a href="#">
              Portfolio
                  </a>
          </li>
          <li>
            <a href="#">
              Blog
                  </a>
          </li>
        </ul>
      </nav>
      <p className="copyright pull-right">
        © 2017 <a href="http://jslancer.com">JSLancer</a>, made with love for a better web
      </p>
    </div>
  </footer>
);

export default Footer;