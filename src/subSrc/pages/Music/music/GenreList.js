import React from 'react'

const GenreList = (props) => {

    return (
        <li onClick={props.handleOnClick} className={ props.className }><a className="dropdown-item" >{props.name}</a></li>
    )
}

export default GenreList