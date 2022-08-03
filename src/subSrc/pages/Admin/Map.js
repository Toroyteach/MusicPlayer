import React from 'react'

export default function Map() {
  return (
      <div className="row min-vh-80">
        <div className="col-12">
          <div className="card h-100">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h5 className="text-white text-capitalize ps-3">Vector Map</h5>
              </div>
            </div>
            <div className="card-body">
              <div id="vector-map" className="mt-5 min-height-500"></div>
            </div>
          </div>
        </div>
      </div>
  )
}
