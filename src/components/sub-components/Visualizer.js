import { useEffect, useRef } from 'react';
import '../../assets/Users/style.css';

// Component that is goung to house Audio Visualizer and the main Waves landing
function Visualizer() {

    const canvas = useRef(null)

    useEffect(() => {
        if(canvas){

          canvas.current.style.width = "100%";
          canvas.current.style.height = "100%";
          canvas.current.width = canvas.current.offsetWidth;
          canvas.current.height = canvas.current.offsetHeight;

          const ctx = canvas.current.getContext("2d")
          ctx.fillRect(0, 0, canvas.current.offsetWidth, canvas.current.offsetHeight);
        }
    }, [ canvas ])

    return (
      <>
                {/* WAves on the container */}

                <div>

                  <div className="wave-container">
                    <div className="wave -one"></div>
                    <div className="wave -two"></div>
                    <div className="wave -three"></div>
                  </div>

                  {/* <div className="custom-spectrum-container">
                    <canvas ref={ canvas }/>
                  </div> */}
                  
                </div>
      </>
    )
}

export default Visualizer;
