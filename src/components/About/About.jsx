// import React from 'react'
// import './About.css'

// const About = () => {
//   return (
//     <div>About</div>
//   )
// }

// export default About



import React from 'react';
import Navbar from '../Navbar/Navbar';
import img from '../../assests/assests/move-in-minute-high-resolution-logo.png'


function AboutUs() {
    return (
        <section className="hero">
            <div className="heading">
                <Navbar></Navbar>
                <h1>About Us</h1>
            </div>
            <div className="container">
                <div className="hero-content">
                    <h2>Welcome To Our Website</h2>
                    <p>
                    Move in a minute for a new vision in the world of travel and tourism. The company is proud to be the first company specialized in how to obtain Zakir as well as university and medical studies at the level of the Arab Gulf countries. Our primary goal is for everyone in addition to excellence and excellence on the Al-Rahah platform. The Move in the First Minute website and application is one of the forms of booking complete tourist offers that connects the traveler with the best tourist attractions and the best services and offers. The "Mone in" website and application provides an easy and enjoyable experience for the traveler by providing a search between offers and companies through a unique platform to provide quick and different travel solutions according to the requirements and budget of each traveler, where you can choose from a wide range of research programs for destinations that provide tourism companies in The world has the best reliable and proven tourism companies. You can also get immediate confirmation when requesting any tourism program, by using our automatic payment methods.
                    </p>
                    <button className="cta-button">Learn More</button>
                </div>
                <div className="hero-image">
                    {/* <img src="image/WhatsApp Image 2024-04-27 at 6.47.38 PM.jpeg" alt="Hero" /> */}
                    <img src={img}alt="hero"/>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
