import React, { useReducer, useState, useEffect, createContext } from 'react'

import musicContext from './musicContext'

const MusicContextState = (props) => {

    //create the WebKit or Audio Context
    const audioCtx = null//new (window.AudioContext || window.webkitAudioContext);

    return (
        <musicContext.Provider
            value={{
                audioContext: audioCtx,
            }}
        >
            {props.children}
        </musicContext.Provider>
    )

}

export default MusicContextState