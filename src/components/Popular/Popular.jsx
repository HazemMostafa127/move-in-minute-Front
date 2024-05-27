// import React from 'react'
// import './Popular.css'

import React from 'react';
import Navbar from '../Navbar/Navbar';

import img1 from '../../assests/london.jpg'
import img2 from '../../assests/paris.jpg' 
import img3 from '../../assests/brazel.jpg'
import img4 from '../../assests/abu dabi.jpg'
import img5 from '../../assests/egypt.jpeg'
import img6 from '../../assests/jermany.jpeg'



// const Date =[
  
// ]




// the fisrt paraghraf

const Popular = () => {
  return (
    <section className='Popular section container'>
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
          <Navbar></Navbar>
            <h2 className="secTitle">
              Popular Destination
            </h2>
            <p>
              from historical cities to natural specteculars,come see the best of the world
            </p>
          </div>

        </div>
        <div className="mainContent grid">
          <div className="singleDestination">
            <div className="destImage">
              <img src={img1}alt="Image title" />
              <div className="overlayInfo">
                <h3>100$</h3>
              </div>
            </div>

            <div className="destFooter">
              <div className="desttext flex">
                <h6>
                  landon
                </h6>
                <span className='flex'>
                 
               
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------ */}
      <div className="secContainer">
        <div className="secHeader flex">

        </div>
        <div className="mainContent grid">
          <div className="singleDestination">
            <div className="destImage">
              <img src={img2}alt="Image title" />
              <div className="overlayInfo">
                <h3>200$</h3>
              </div>
            </div>

            <div className="destFooter">
              <div className="desttext flex">
                <h6>
                  Paris
                </h6>
                <span className='flex'>
                 
               
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------- */}
      <div className="secContainer">
        <div className="secHeader flex">

        </div>
        <div className="mainContent grid">
          <div className="singleDestination">
            <div className="destImage">
              <img src={img3}alt="Image title" />
              <div className="overlayInfo">
                <h3>300$</h3>
              </div>
            </div>

            <div className="destFooter">
              <div className="desttext flex">
                <h6>
                  Brazil
                </h6>
                <span className='flex'>
                 
               
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------------------------- */}
      <div className="secContainer">
        <div className="secHeader flex">

        </div>
        <div className="mainContent grid">
          <div className="singleDestination">
            <div className="destImage">
              <img src={img4}alt="Image title" />
              <div className="overlayInfo">
                <h3>400$</h3>
              </div>
            </div>

            <div className="destFooter">
              <div className="desttext flex">
                <h6>
                  Abo dubi
                </h6>
                <span className='flex'>
                 
               
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------- */}
      <div className="secContainer">
        <div className="secHeader flex">

        </div>
        <div className="mainContent grid">
          <div className="singleDestination">
            <div className="destImage">
              <img src={img5}alt="Image title" />
              <div className="overlayInfo">
                <h3>500$</h3>
              </div>
            </div>

            <div className="destFooter">
              <div className="desttext flex">
                <h6>
                  Egypt
                </h6>
                <span className='flex'>
                 
               
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------------------- */}
      <div className="secContainer">
        <div className="secHeader flex">

        </div>
        <div className="mainContent grid">
          <div className="singleDestination">
            <div className="destImage">
              <img src={img6}alt="Image title" />
              <div className="overlayInfo">
                <h3>600$</h3>
              </div>
            </div>

            <div className="destFooter">
              <div className="desttext flex">
                <h6>
                  germany
                </h6>
                <span className='flex'>
                 
               
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------------------- */}


      

    </section>
  )
}

export default Popular



