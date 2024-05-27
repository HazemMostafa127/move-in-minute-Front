import React from 'react'
import Navbar from '../Navbar/Navbar';
import './Home.css'

// import CheckboxGroup from './CheckboxGroup.jsx';
// import { FaPlaneDeparture } from 'react-icons/fa'
// import {FaBus, FaTrain, FaPlane} from "react-icons/fa6"

const Home = () => {
  return (
    <section className='home1'>
      <div className=" secContainer container">
      <Navbar></Navbar>
        <div className="homeText">

          <h1 className="title">
          
          </h1>
        </div>

        


 
        <div className='ahmed'>
      <button className="btn success">Bus</button>
      <button className="btn info">Train</button>
      <button className="btn warning">Flight</button>
        </div>
<br />
<br />
<br />



        <div className="homeCard grid">

          <div className="locationDiv">
            <label htmlFor="location">travel from</label>
            <input type="text" placeholder='location' />
          </div>

          <div className="locationDiv">
            <label htmlFor="location">travel to</label>
            <input type="text" placeholder='location' />
          </div>

          <div className="locationDiv">
          <form >
      <label htmlFor="dateInput">Date</label>
      <input type="date" className="locationDiv" name="dateInput" pattern="\d{1,2}/\d{1,2}/\d{4}" placeholder="dd/mm/yyyy" />
    </form>
          </div>

          
          <div className="locationDiv">
            <label  name="adult" htmlFor="Pasenger" minlength="1" maxlength="2" pattern="[0-9()+-]*">Adult</label>
            <input type="tel" placeholder='+12 years' minlength="1" maxlength="2" pattern="[0-9()+-]*"/>
          </div>



          <div className="locationDiv">
            <label name="children" htmlFor="Pasenger" minlength="1" maxlength="2" pattern="[0-9()+-]*" >Children</label>
            <input type="tel" placeholder='2-12 y ' minlength="1" maxlength="2" pattern="[0-9()+-]*" />
          </div>
          


          <button className='btn'>
          <a className='abooking' href="./Booking confirm">Booking</a> 
          </button>

        </div>
      </div>
    </section>
  )
}

export default Home