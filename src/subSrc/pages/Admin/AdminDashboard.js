import React, { useContext } from 'react'

import NeutralUsageStats from '../../layouts/mainlayout/neutral/NeutralUsageStats.js'

//user details context
import appContext from '../../services/context/appContext.js'

//import the chart library
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function AdminDashboard() {

  const {
    userData,
    appSettings: {
      cumulativeMinutesListened,
      cumulativeDownloaded,
      cumulativePlays,
      cummulativeQuizeAttempts,
      usersCount,
      shazamCounts,
      highestFavourite,
      cumulativeComments,
    },
    musicSettings: {
      mixList,
    },
  } = useContext(appContext);

  //chart data set
  const state = {
    labels: mixList,
    datasets: [
      {
        label: 'Plays',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [12, 23, 53, 15, 35, 64, 14, 16, 27, 37, 48, 19, 29, 39, 16, 62, 25, 63, 23, 12, 13, 23, 41, 31, 14, 54, 23, 1, 12, 32, 24, 26, 17, 27]
      }
    ]
  }


  return (
    <>
      <div className="row" style={{ marginTop: "20px" }}>

        <div className="col-xl-3 col-sm-3 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                <i className="material-icons opacity-10">people</i>
              </div>
              <div className="text-end pt-1">
                <p className="text-sm mb-0 text-capitalize">Users</p>
                <h4 className="mb-0">{usersCount}</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer p-3">
              {/* <!-- <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+55% </span>than last week</p> --> */}
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-3 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                <i className=" opacity-10"><svg xmlns="http://www.w3.org/2000/svg" transform="translate(0,-3)" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M11 17c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-14v4h2V5.08c3.39.49 6 3.39 6 6.92 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.68.59-3.22 1.58-4.42L12 13l1.41-1.41-6.8-6.8v.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9 4.97 0 9-4.03 9-9s-4.03-9-9-9h-1zm7 9c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zM6 12c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z" /></svg></i>
              </div>
              <div className="text-end pt-1">
                <p className="text-sm mb-0 text-capitalize">Total Minutes Listened</p>
                <h4 className="mb-0">{cumulativeMinutesListened}min</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer p-3">
              {/* <!-- <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+3% </span>than last month</p> --> */}
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-3 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                <i className="material-icons opacity-10"><svg xmlns="http://www.w3.org/2000/svg" transform="translate(0,-3)" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24" /></g><g><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M13.03,7.06L14.09,6l1.41,1.41 L16.91,6l1.06,1.06l-1.41,1.41l1.41,1.41l-1.06,1.06L15.5,9.54l-1.41,1.41l-1.06-1.06l1.41-1.41L13.03,7.06z M6.25,7.72h5v1.5h-5 V7.72z M11.5,16h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2V16z M18,17.25h-5v-1.5h5V17.25z M18,14.75h-5v-1.5h5V14.75z" /></g></svg></i>
              </div>
              <div className="text-end pt-1">
                <p className="text-sm mb-0 text-capitalize">Total Plays</p>
                <h4 className="mb-0"> {cumulativePlays}</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer p-3">
              {/* <!-- <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+3% </span>than last month</p> --> */}
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-3 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                <i className="material-icons opacity-10"><svg xmlns="http://www.w3.org/2000/svg" transform="translate(0,-3)" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" /></svg></i>
              </div>
              <div className="text-end pt-1">
                <p className="text-sm mb-0 text-capitalize">Downloaded</p>
                <h4 className="mb-0">{cumulativeDownloaded}</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer p-3">
              {/* <!-- <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+3% </span>than last month</p> --> */}
            </div>
          </div>
        </div>

      </div>

      <br />

      <div className="row">

        <div className="col-xl-3 col-sm-3 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                <i className="material-icons opacity-10"><svg xmlns="http://www.w3.org/2000/svg" transform="translate(0,-3)" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg></i>
              </div>
              <div className="text-end pt-1">
                <p className="text-sm mb-0 text-capitalize">Favourited</p>
                <h4 className="mb-0">{highestFavourite}</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer p-3">
              {/* <!-- <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+55% </span>than last week</p> --> */}
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-3 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                <i className="material-icons opacity-10"><svg xmlns="http://www.w3.org/2000/svg" transform="translate(0,-3)" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" /></svg></i>
              </div>
              <div className="text-end pt-1">
                <p className="text-sm mb-0 text-capitalize">Total Comments</p>
                <h4 className="mb-0">{cumulativeComments}</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer p-3">
              {/* <!-- <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+3% </span>than last month</p> --> */}
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-3 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                <i className="material-icons opacity-10"><svg xmlns="http://www.w3.org/2000/svg" transform="translate(0,-3)" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z" /></svg></i>
              </div>
              <div className="text-end pt-1">
                <p className="text-sm mb-0 text-capitalize">Shazam Requests</p>
                <h4 className="mb-0"> {shazamCounts}</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer p-3">
              {/* <!-- <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+3% </span>than last month</p> --> */}
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-3 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                <i className="material-icons opacity-10"><svg xmlns="http://www.w3.org/2000/svg" transform="translate(0,-3)" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none" /></g><g><g><path d="M4,6H2v14c0,1.1,0.9,2,2,2h14v-2H4V6z" /><path d="M20,2H8C6.9,2,6,2.9,6,4v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M14.01,15 c-0.59,0-1.05-0.47-1.05-1.05c0-0.59,0.47-1.04,1.05-1.04c0.59,0,1.04,0.45,1.04,1.04C15.04,14.53,14.6,15,14.01,15z M16.51,8.83 c-0.63,0.93-1.23,1.21-1.56,1.81c-0.13,0.24-0.18,0.4-0.18,1.18h-1.52c0-0.41-0.06-1.08,0.26-1.65c0.41-0.73,1.18-1.16,1.63-1.8 c0.48-0.68,0.21-1.94-1.14-1.94c-0.88,0-1.32,0.67-1.5,1.23l-1.37-0.57C11.51,5.96,12.52,5,13.99,5c1.23,0,2.08,0.56,2.51,1.26 C16.87,6.87,17.08,7.99,16.51,8.83z" /></g></g></svg></i>
              </div>
              <div className="text-end pt-1">
                <p className="text-sm mb-0 text-capitalize">Quize attemps</p>
                <h4 className="mb-0">{cummulativeQuizeAttempts}</h4>
              </div>
            </div>
            <hr className="dark horizontal my-0" />
            <div className="card-footer p-3">
              {/* <!-- <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+3% </span>than last month</p> --> */}
            </div>
          </div>
        </div>

      </div>

      <div className="row mt-4">
        <div className="col-lg-7 col-md-12 mt-4 mb-4">
          <div className="card z-index-2 ">
            
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
              <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">

                <div className="chart-co text-white" style={{   position: 'relative', height: '386px', width: '800px' }}>

                  <Line options={{
                    title: {
                      display: true,
                      text: 'Average Rainfall per month',
                      fontSize: 20
                    },
                    legend: {
                      display: true,
                      position: 'right'
                    },
                    option: {
                      maintainAspectRatio: true,
                      responsive: true
                    }
                  }} data={state} />
                </div>

              </div>
            </div>

            <div className="card-body">
              <h6 className="mb-0 ">Mixes Listens</h6>
              <p className="text-sm ">Music Mix Performance</p>
              <hr className="dark horizontal" />
              <div className="d-flex ">
                <i className="material-icons text-sm my-auto me-1">Data</i>
                <p className="mb-0 text-sm"> updated sent 2 days ago </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NeutralUsageStats />
    </>
  )
}
