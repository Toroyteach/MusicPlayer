import React, { PureComponent } from 'react'

import '../../assets/Users/style.css';

export default class Visualizer extends PureComponent {
  render() {
    return (
      <>
                {/* WAves on the container */}

                <div className="">
                  <div className="wave-container">
                    <div className="wave -one"></div>
                    <div className="wave -two"></div>
                    <div className="wave -three"></div>
                  </div>
                  
                </div>
      </>
    )
  }
}
