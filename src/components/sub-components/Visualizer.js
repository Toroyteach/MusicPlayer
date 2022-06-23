import { useEffect, useRef, useState } from 'react';
import '../../assets/Users/style.css';

import '../../assets/Users/style.css';
import Song from '../music/audio.mp3';

// Component that is goung to house Audio Visualizer and the main Waves landing
function Visualizer() {

    //Audio state of item playing
    const [audio] = useState(new Audio(Song));

    //playing state hook
    const [playing, setPlaying] = useState(false);

    //toggle between playing and not
    const toggle = () => setPlaying(!playing);

    //context to render the cframe
    const [context, setContext] = useState(null);
  
    //reference to the canvas object
    const canvasRef = useRef(null);

    //ref to hold id to the request animation frame to stop it
    const requestIdRef = useRef(null);

    //Audio Waveform variables
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    let audioSource = useRef();
    let analyser = useRef();

    let bufferLength = useRef();
    let dataArray = useRef();
    let barWidth = useRef();

    
    //use effect to load the canavas element
    useEffect(() => {
        
        if (canvasRef.current) {

            const renderCtx = canvasRef.current.getContext('2d');
                
            canvasRef.current.style.width = "100%";
            canvasRef.current.style.height = "100%";
            canvasRef.current.width = canvasRef.current.offsetWidth;
            canvasRef.current.height = canvasRef.current.offsetHeight;
                
            if (renderCtx) {
                setContext(renderCtx);
            }
                
        }
            
    }, [context]);

    
    //function to handle and call the animate function recursively
    const tick = () => {
        if (!canvasRef.current) return;

        let x = 0;

        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        //console.log(dataArray);
        //console.log(dataArray);
        analyser.getByteFrequencyData(dataArray);

        for (let i = 0; i < bufferLength; i++) {

            let barHeight = dataArray[i];
            context.fillStyle = "black";
            context.fillRect(x, canvasRef.current.height - barHeight, barWidth, barHeight);
            x += barWidth;

        }

        requestIdRef.current = requestAnimationFrame(tick);

    };


    //effect to play the music
    useEffect(() => {

        //playing ? audio.play() : audio.pause();

        if(playing){

            audio.play();

            audioSource = audioCtx.createMediaElementSource(audio); //
            analyser = audioCtx.createAnalyser(); //
            
            audioSource.connect(analyser);
            analyser.connect(audioCtx.destination);
            analyser.fftSize = 128;
            
            bufferLength = analyser.frequencyBinCount //
            dataArray = new Uint8Array(bufferLength);//
            barWidth = canvasRef.current.width / bufferLength//
            //console.log(bufferLength);

            requestIdRef.current = requestAnimationFrame(tick);

        } else {

            audio.pause();

            //cancels the animation if pause button is hit
            cancelAnimationFrame(requestIdRef.current);
            if(context){
                //context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            }

        }


        //clean up for the effect hook
        return () => {

            cancelAnimationFrame(requestIdRef.current);

        };

      }, [ playing, audio]

    );

    //effect to listen to the audio playing to detect the end of it playing
    useEffect(() => {

        audio.addEventListener('ended', () => setPlaying(false));
  
        return () => {
          audio.removeEventListener('ended', () => setPlaying(false));
        };
  
    }, [ audio]);

    return (
      <>
                {/* Waves on the container */}

                <div>
                {/* <button onClick={toggle}>{playing ? "Pause" : "Play"}</button> */}

                  <div className="wave-container">
                    <div className="wave -one"></div>
                    <div className="wave -two"></div>
                    <div className="wave -three"></div>
                  </div>

                  <div className="custom-spectrum-container">
                    <canvas ref={canvasRef}/>
                  </div>
                  
                </div>
      </>
    )
}

export default Visualizer;
