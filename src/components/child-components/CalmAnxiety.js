import React, { PureComponent } from 'react'

import '../../assets/Users/style.css';
// import $ from 'jquery';

export default class CalmAnxiety extends PureComponent {
  render() {
    return (
        <>
                          {/* this section will have the calm your anxiety pictures */}
                          <div className="anxiety" id="anxiety">

                <video loop autoPlay width="100%" height="auto" controls>
                <source src="https://www.datocms-assets.com/22581/1603987602-videezy-2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>

                </div>
        </>
    )
  }
}
