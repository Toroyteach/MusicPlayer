import React, { useEffect, useState, useContext } from 'react'
import { useSelector } from 'react-redux';

import stockImage from '../../../assets/users/stockimageNasa.jpg'
//user details context
import appContext from '../../../services/context/appContext.js';

export default function Astronomy() {

  const {
    astronomyPicture,
  } = useContext(appContext)

  const appData = useSelector((state) => state.app.data)

  //check is image is loaded
  const [ exist, setExist ] = useState(false);
  // const [ astronomyUrl, setAstronomyUrl ] = useState(astronomyPicture.url)  

  useEffect( () =>{

    //setAstronomyUrl(astronomyPicture.url)

    // const youtubeRegext = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/

    // if(astronomyUrl.match(youtubeRegext)){

    //   console.log(exist)

    //   setExist(true)
    // }

  }, [])

  return (
    <>
      {/* this section will host the astronomy picture of the day */}
      <div className='astronomy' id='astronomy'>
        <div className="card">
          <div className="row no-gutters">
            <div className="col-md-8">

              {/* <img src={ exist ?  stockImage : astronomyPicture.url } alt={astronomyPicture.title} className="card-img" /> */}

              { exist ? ( <img src={ stockImage } alt={appData.astronomyPicture.title} className="card-img" /> ) : ( <img src={ appData.astronomyPicture.url } alt={appData.astronomyPicture.title} className="card-img" /> ) }

            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">{appData.astronomyPicture.title}</h5>
                <p className="card-text">{appData.astronomyPicture.explanation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}
