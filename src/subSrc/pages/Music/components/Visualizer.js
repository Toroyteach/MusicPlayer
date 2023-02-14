import { useEffect, useRef, useState, useContext } from 'react';

//import necessary files to make state and context consistent
import appContext from '../../../services/context/appContext.js';

//import music context to call the audio context object methods
import musicContext from '../../../services/music/musicContext.js';

//import gsap for smooth waves fade away on play
import $ from 'jquery';
import { gsap, Power2 } from 'gsap';

// Component that is going to house Audio Visualizer and the Spectrum waves
const Visualizer = () => {

    // Global APplication State
    const {
        audioObject,
        musicSettings: {
            playing,
        },
    } = useContext(appContext)

    //Audio context State
    const {
        audioContext,
    } = useContext(musicContext)


    //get the audio source from the context and create media element
    const audioSource = audioContext.createMediaElementSource(audioObject);

    //Use this to allow the smooth fade of the waves to the spectrum
    const [visualizerActive, setVisualizerActive] = useState(false);

    const canvasRef = useRef(null)
    const [context, setContext] = useState(null);

    let analyser = audioContext.createAnalyser();
    let bufferLength = useRef();
    let dataArray = useRef();
    let barWidth = useRef();

    //draw the animation with this tic function
    const tick = () => {

        if (!context) return;

        let x = 0;

        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        analyser.getByteFrequencyData(dataArray);

        //console.log(dataArray)

        for (let i = 0; i < bufferLength; i++) {

            let barHeight = dataArray[i];

            //context.fillStyle = "black";
            //console.log(dataArray)
            let r = barHeight + (25 * (i / bufferLength));
            let g = 250 * (i / bufferLength);
            let b = 50;
            context.fillStyle = "rgb(" + r + "," + g + "," + b + ")";

            context.fillRect(x, canvasRef.current.height - barHeight, barWidth, barHeight);

            x += barWidth + 2;


        }


    };


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

        let animationFrameId

        const render = () => {
            tick()
            animationFrameId = window.requestAnimationFrame(render)
        }

        if (playing) {

            if (audioContext.state === 'suspended') {

                gsap.to($(".wave-container"), 1, { yPercent: 60, ease: Power2.easeOut }, 0);

                audioContext.resume()

                audioSource.connect(analyser);

                analyser.connect(audioContext.destination);

                analyser.fftSize = 256;

                bufferLength = analyser.frequencyBinCount //

                dataArray = new Uint8Array(bufferLength);//

                barWidth = (canvasRef.current.width / bufferLength) * 2.5//

                render()
            }


        } else {

            if (audioContext.state === 'running') {

                setTimeout(() => {

                    gsap.to($(".wave-container"), 1, { yPercent: 0, ease: Power2.easeInOut }, 1);

                }, 5000);

                audioSource.disconnect()

                analyser.disconnect();

                audioContext.suspend()

                window.cancelAnimationFrame(animationFrameId)
            }

        }


        //close all the resources of the audio context
        return () => {

            analyser.disconnect();

            audioContext.suspend()

            window.cancelAnimationFrame(animationFrameId)

        }


    }, [playing, context])


    return (
        <>
            <div className="wave-container">
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
            </div>

            <div className="custom-spectrum-container">
                <canvas ref={canvasRef} />
            </div>
        </>
    )
}

export default Visualizer;
