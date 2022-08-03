import React, { useEffect, useState, useContext } from 'react'

// import '../../../../assets/Users/style.css';

//user details context
import appContext from '../../../services/context/appContext.js';

export default function Astronomy() {

  const {
    astronomyPicture,
  } = useContext(appContext)

  return (
    <>
      {/* this section will host the astronomy picture of the day */}
      <div className='astronomy' id='astronomy'>
        <div className="card">
          <div className="row no-gutters">
            <div className="col-md-9">
              <img src={astronomyPicture.url} alt={astronomyPicture.title} className="card-img" />
            </div>
            <div className="col-md-3">
              <div className="card-body">
                <h5 className="card-title">{astronomyPicture.title}</h5>
                <p className="card-text">{astronomyPicture.explanation}</p>
                <p className="card-text">Last updated {astronomyPicture.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}
