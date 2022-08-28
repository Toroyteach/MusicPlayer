import React from "react";

//import bootstrap loading spinner for when loading audio
import Spinner from 'react-bootstrap/Spinner'

const PlayLoad = (props) => {

    let { isLoading, sourceButton } = props;

    if (isLoading) {

        if (sourceButton === 'footer') {

            return (
                <>
                    <Spinner className='footerPlayerSpinner' size="sm" animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </>
            )

        } else {

            return (
                <>
                    <Spinner className='mainPlayerSpinner' size="sm" animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </>
            )

        }


    } else {

        return (
            <>
                <i className="btn-play fa fa-play footerPlayer" aria-hidden="true"></i>
                <i className="btn-pause fa fa-pause footerPlayer" aria-hidden="true" ></i>
            </>
        )

    }
};

export default PlayLoad;
