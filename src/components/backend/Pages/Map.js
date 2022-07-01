import React from 'react'

export default function Map() {
  return (
    <>
    <div class="row min-vh-80">
        <div class="col-12">
          <div class="card h-100">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h5 class="text-white text-capitalize ps-3">Vector Map</h5>
              </div>
            </div>
            <div class="card-body">
              <div id="vector-map" class="mt-5 min-height-500"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
