import React, { useContext, useState } from 'react'

import NeutralUsageStats from '../../layouts/mainlayout/neutral/NeutralUsageStats';

//user details context
import appContext from '../../services/context/appContext.js'

export default function UserDashboard() {

  const {
    userData: {
      totalPlaysCount,
      totalMinutesListened,
    },
  } = useContext(appContext);

  return (
    <>
      <div className="row" style={{ marginTop: "20px" }}>

        <div className="col-xl-6 col-sm-6 mb-xl-0 mb-4" id="TotalPlaysCount">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                <i className="material-icons opacity-10"><svg xmlns="http://www.w3.org/2000/svg" transform="translate(0,-3)" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24" /></g><g><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M13.03,7.06L14.09,6l1.41,1.41 L16.91,6l1.06,1.06l-1.41,1.41l1.41,1.41l-1.06,1.06L15.5,9.54l-1.41,1.41l-1.06-1.06l1.41-1.41L13.03,7.06z M6.25,7.72h5v1.5h-5 V7.72z M11.5,16h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2V16z M18,17.25h-5v-1.5h5V17.25z M18,14.75h-5v-1.5h5V14.75z" /></g></svg></i>
              </div>
              <div className="text-end pt-1">
                <p className="text-sm mb-0 text-capitalize">Total Plays</p>
                <h4 className="mb-0">{totalPlaysCount}</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer p-3">
              {/* <!-- <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+55% </span>than last week</p> --> */}
            </div>
          </div>
        </div>

        <div className="col-xl-6 col-sm-6 mb-xl-0 mb-4" id="TotalMinutesListened">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                <i className="material-icons opacity-10"><svg xmlns="http://www.w3.org/2000/svg" transform="translate(0,-3)" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M11 17c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-14v4h2V5.08c3.39.49 6 3.39 6 6.92 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.68.59-3.22 1.58-4.42L12 13l1.41-1.41-6.8-6.8v.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9 4.97 0 9-4.03 9-9s-4.03-9-9-9h-1zm7 9c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zM6 12c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z" /></svg></i>
              </div>
              <div className="text-end pt-1">
                <p className="text-sm mb-0 text-capitalize">Minutes Listened</p>
                <h4 className="mb-0">{totalMinutesListened}min</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer p-3">
              {/* <!-- <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+3% </span>than last month</p> --> */}
            </div>
          </div>
        </div>

      </div>

      <NeutralUsageStats />
    </>
  )
}
