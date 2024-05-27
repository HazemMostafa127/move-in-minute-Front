

import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      {/* Grid container */}
      <div className="container">
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="row1">
            <h5 className="h5">Move In Minute</h5>

            <p>
              Book Flight  
                 <br />
              Domestic Flight
              <br />     
              Foreign Flight
              <br />     
              Booking Airline Tickets
              <br />   
              Privacy And Terms Of Use
            </p>
          </div>
          {/*Grid column*/}

          {/*Grid column*/}
          <div className="row2">
            <h5 className="h5">Move In Minute</h5>

            <p>
              Move In Minute Winner Of The Best Online Tourism Company In Africia 2023 And Best In Egypt 2023,2022,2021 From The World Travel Awards, Specializing In Booking
            </p>
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
      </div>
      {/* Grid container */}

      {/* Copyright */}
      <div className="Copyright" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2024 Copyright:
        <a className="a" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default Footer;
