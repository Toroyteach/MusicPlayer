import React, { useEffect, useState, useContext } from 'react'

import '../../../../assets/Users/style.css';
// import $ from 'jquery';

//user details context
import appContext from '../../context/appContext';

import axios from 'axios';

export default function Astronomy() {

  const {
    astronomyPicture,
  } = useContext(appContext)

  //test load the active spectrum type
  // useEffect(() =>{
  //   console.log(astronomyPicture);
  // },[astronomyPicture])

  return (
    <>
      {/* this section will host the astronomy picture of the day */}
      <div className='astronomy' id='astronomy'>
        <div className="card">
          <div className="row no-gutters">
            <div className="col-md-9">
              <img src={astronomyPicture.url} alt={astronomyPicture.title} className="card-img"/>
            </div>
            <div className="col-md-3">
              <div className="card-body">
                <h5 className="card-title">{astronomyPicture.title}</h5>
                <p className="card-text">{astronomyPicture.explanation}</p>
                <p className="card-text"><small className="text-muted">Last updated {astronomyPicture.date}</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}
