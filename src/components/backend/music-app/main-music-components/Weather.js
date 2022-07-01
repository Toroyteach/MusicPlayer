import React, { useRef, useEffect} from 'react'

function Weather() {

  const weatherCanvas = useRef(null)

  useEffect(() => {
      if(weatherCanvas){

        weatherCanvas.current.style.width = "100%";
        weatherCanvas.current.style.height = "100%";
        weatherCanvas.current.width = weatherCanvas.current.offsetWidth;
        weatherCanvas.current.height = weatherCanvas.current.offsetHeight;

        const ctx = weatherCanvas.current.getContext("2d")
        ctx.fillRect(0, 0, weatherCanvas.current.offsetWidth, weatherCanvas.current.offsetHeight);

      }
  }, [ weatherCanvas ])

    return (
      <div>

        <div className="weather-canvas-container">
          <canvas ref={ weatherCanvas }/>
        </div>
        
      </div>
    )
  }


export default Weather;
