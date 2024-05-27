import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <section className='NavbarSection'>
      <div className='logo-navbar'>
      <Link className='logoLink' to="http://localhost:3000/"> MoveInMinute</Link>
      </div>

      <div className='nav-content'>
        <Link to="/Home">Home</Link>
        <Link to="/popular">Travel Destination</Link>
        <Link to="/About">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        {/* <Link to="/Booking confirm">Booking</Link> */}
      </div>

      <div className="headerBtns flex">
        <button className='btn loginBtn'>
          <Link to="/Login">Login</Link>
        </button>
        <button className='btn'>
          <Link to="/SignUp">Sign Up</Link>
        </button>
      </div>
      {




      /* <div className="header">

        <div className="logoDiv">
          <a href="#" className="logo">
            <h1 className='flex'><SiYourtraveldottv className="icon"/>
            move in minute            
            </h1>
          </a>
        </div>
        <div className="naavbar">
          <ul className="navLists flex">

            <li className="navItem">
              <a href="#" className="navLink">Home Page</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Products</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Resources</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Contacts</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Blog</a>
            </li>

            <div className="headerBtns flex">
              <button className='btn loginBtn'>
                <a href="#">Login </a>
              </button>
              <button className='btn'>
                <a href="#">Sign Up</a>
              </button>
            </div>
          </ul>

          <div className="closeNavbar">
            <AiFillCloseCircle className="icon"/>
          </div>
        </div>

        <div className="toggleNavbar">
          <TbGridDots className="icon"/>
        </div>
      </div> */}
    </section>
  )
}

export default Navbar