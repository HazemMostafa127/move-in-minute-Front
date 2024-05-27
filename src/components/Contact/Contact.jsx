// import React from 'react'
// import './Contact.css'

// const Contact = () => {
//   return (
//     <div>Contact</div>
//   )
// }

// export default Contact


import React from 'react';
import Navbar from '../Navbar/Navbar';

function ContactUs() {
  return (
    <section className="Material-contact-section section-padding section-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-12 wow animated fadeInLeft" data-wow-delay=".2s">
             <Navbar></Navbar>
            <h1 className="section-title">Contact US</h1>
          </div>
        </div>
        <div className="row">
          
          <div className="col-md-6 wow animated fadeInRight" data-wow-delay=".2s">
            <form className="shake" role="form" method="post" id="contactForm" name="contact-form" data-toggle="validator">
              <div className="form-group label-floating">
                <label className="control-label" htmlFor="name">Name</label>
                <input className="form-control" id="name" type="text" name="name" required data-error="Please enter your name" />
                <div className="help-block with-errors"></div>

              </div>
              <div className="form-group label-floating">
                <label className="control-label" htmlFor="email">Email</label>
                <input className="form-control" id="email" type="email" name="email" required data-error="Please enter your Email" />
                <div className="help-block with-errors"></div>
              </div>
              <div className="form-group label-floating">
                <label className="control-label">Subject</label>
                <input className="form-control" id="msg_subject" type="text" name="subject" required data-error="Please enter your message subject" />
                <div className="help-block with-errors"></div>
              </div>
              <div className="form-group label-floating">
                <label htmlFor="message" className="control-label">Message</label>
                <textarea className="form-control" rows="3" id="message" name="message" required data-error="Write your message"></textarea>
                <div className="help-block with-errors"></div>
              </div>
              <div className="form-submit mt-5">
                <button className="btn btn-common" type="submit" id="form-submit"><i className="material-icons mdi mdi-message-outline"></i> Send Message</button>
                <div id="msgSubmit" className="h3 text-center hidden"></div>
                <div className="clearfix"></div>
              </div>
            </form>
            <div className="col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft" data-wow-delay=".2s">
            <p>Contact us via the following</p>

            <div className="find-widget">
              {/* Company: <a href="https://hostriver.ro">HostRiver</a> */}
              Company: <a href="https://move in minute.ro">     Move in </a>
            </div>
            <div className="find-widget">
              Address: <a href="#">Cairo</a>
            </div>
            <div className="find-widget">
              Phone: <a href="#">191119</a>
           
            
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
