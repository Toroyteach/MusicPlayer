import React from 'react'

const LanguageList = (props) => {
    
    return (
        <li onClick={props.handleOnClick}><i className={props.style}></i> <span>{props.name}</span></li>
    )
}

export default LanguageList