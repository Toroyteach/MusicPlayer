import { useEffect, useRef, useState, useContext } from 'react';

// import Song from '../music/audio.mp3';

//import necessary files to make state and context consistent
import appContext from '../../../services/context/appContext.js';

// Component that is going to house Audio Visualizer and the main Waves landing
function Visualizer() {

  // Global State
  const {
    appSettings: {
      activeSpectrum
    },
    musicSettings: {
      playing,
    },
    //audioObject,
    //audioContext,
    // audioSource,
    //analyser,
  } = useContext(appContext)

  //Audio state of item playing
  // const [audio] = useState(new Audio(Song));

  //playing state hook
  //const [playing, setPlaying] = useState(false);

  //toggle between playing and not
  //const toggle = () => setPlaying(!playing);

  //context to render the cframe
  const [context, setContext] = useState(null);

  //reference to the canvas object
  const canvasRef = useRef(null);

  //ref to hold id to the request animation frame to stop it
  const requestIdRef = useRef(null);

  //Audio Waveform variables
  //const audioCtx = new (window.AudioContext || window.webkitAudioContext);
  //let audioSource = audioContext.createMediaElementSource(audioObject);
  //let analyser = audioContext.createAnalyser();
  let bufferLength = useRef();
  let dataArray = useRef();
  let barWidth = useRef();

  //get the user selected type of visualizer and set default
  const [visualizerActive, setVisualizerActive] = useState(false);
  //console.log(' visualizer active ',visualizerActive)

  //use effect to load the canavas element
  // useEffect(() => {

  //   if (canvasRef.current) {

  //     const renderCtx = canvasRef.current.getContext('2d');

  //     canvasRef.current.style.width = "100%";
  //     canvasRef.current.style.height = "100%";
  //     canvasRef.current.width = canvasRef.current.offsetWidth;
  //     canvasRef.current.height = canvasRef.current.offsetHeight;
  //     // canvasRef.current.style = "border:2px solid #000000";

  //     if (renderCtx) {
  //       setContext(renderCtx);
  //     }

  //   }

  // }, [context]);


  //function to handle and call the animate function recursively
  // const tick = () => {
  //   if (!canvasRef.current) return;

  //   let x = 0;

  //   context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  //   //console.log(dataArray);
  //   analyser.getByteFrequencyData(dataArray);

  //   for (let i = 0; i < bufferLength; i++) {

  //     let barHeight = dataArray[i];

  //     //context.fillStyle = "black";
  //     let r = barHeight + (25 * (i / bufferLength));
  //     let g = 250 * (i / bufferLength);
  //     let b = 50;
  //     context.fillStyle = "rgb(" + r + "," + g + "," + b + ")";

  //     context.fillRect(x, canvasRef.current.height - barHeight, barWidth, barHeight);

  //     x += barWidth + 2;


  //   }

  //   requestIdRef.current = requestAnimationFrame(tick);

  // };


  //bring the logic of visualizer calculation to method
  const createAudioVisulizerSetup = () => {

  }


  //effect to play the music
  // useEffect(() => {

  //   //playing ? audio.play() : audio.pause();

  //   if (playing) {

  //     //check if the user eneable to be showwn visualizer in profile settings
  //     activeSpectrum ? setVisualizerActive(true) : setVisualizerActive(false)

  //     //audio.play();
  //     //console.log('audio is playing')

  //     // audioSource = audioContext.createMediaElementSource(audioObject); //
  //     // analyser = audioContext.createAnalyser(); //

  //     console.log(analyser);

  //     audioSource.connect(analyser);
  //     analyser.connect(audioContext.destination);
  //     //audioCtx.resume()
  //     analyser.fftSize = 256;

  //     bufferLength = analyser.frequencyBinCount //
  //     dataArray = new Uint8Array(bufferLength);//
  //     barWidth = (canvasRef.current.width / bufferLength) * 2.5//
  //     //console.log(bufferLength);

  //     requestIdRef.current = requestAnimationFrame(tick);

  //   } else {

  //     setVisualizerActive(false)
  //     //audio.pause();
  //     //console.log('audio is playing')

  //     //cancels the animation if pause button is hit
  //     cancelAnimationFrame(requestIdRef.current);

  //     if (context) {
  //       //context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  //     }

  //   }


  //   //clean up for the effect hook
  //   return () => {

  //     cancelAnimationFrame(requestIdRef.current);

  //     //audioContext.suspend();
  //     // audioSource.disconnect();
  //     // analyser.disconnect();
  //     //audioCtx.close()
  //     //audioContext.suspend()

  //   };

  // }, [playing, audioObject]

  // );

  return (
    <>
      {/* Waves on the container */}
      {/* <div className="wave-container" style={{ visibility: visualizerActive ? 'hidden' : '' }}>
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>

      <div className="custom-spectrum-container" style={{ visibility: visualizerActive ? '' : 'hidden' }}>
        <canvas ref={canvasRef} />
      </div> */}

      <div className="wave-container">
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
    </>
  )
}

export default Visualizer;
