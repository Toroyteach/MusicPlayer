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
        <h3>{astronomyPicture.title}</h3>
        <img src={astronomyPicture.url} alt={astronomyPicture.title} style={{ width:'auto', height:'100%' }}/>
      </div>
    </>
  )

}
