import React, { PureComponent } from 'react'

import '../../assets/Users/style.css';
// import $ from 'jquery';

export default class Astronomy extends PureComponent {
  render() {
    return (
        <>
            {/* this section will host the astronomy picture of the day */}
            <div className='astronomy' id='astronomy'>
            </div>
        </>
    )
  }
}
