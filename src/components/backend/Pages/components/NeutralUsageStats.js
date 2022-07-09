import React, { useContext } from 'react'


//user details context
import appContext from '../../context/appContext.js'

import imageBadge from '../../../../assets/backend/img/small-logos/logo-xd.svg'

export default function NeutralUsageStats({userData}) {

    const {
        comments,
        history,
        shazam,
        favourite,
    } = userData;


    return (
        <>
            <div className="row mt-4">
                <div className="col-lg-4 col-md-6 mt-4 mb-4">
                    <div className="card h-100">
                        <div className="card-header pb-0">
                            <h6>History Plays</h6>
                            <p className="text-sm">
                                <i className="fa fa-arrow-up text-success" aria-hidden="true"></i>
                            </p>
                        </div>
                        <div className="card-body p-3">

                            <div className="timeline timeline-one-side">

                                {history.map((song, i) => (
                                    <div className="timeline-block mb-3" key={i}>
                                        <span className="timeline-step">
                                            <i className="material-icons text-success text-gradient"><svg xmlns="http://www.w3.org/2000/svg" transform="translate(0,-3)" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" /></svg></i>
                                        </span>
                                        <div className="timeline-content">
                                            <h6 className="text-dark text-sm font-weight-bold mb-0">{song.title}</h6>
                                            <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">{song.dateUpdated}</p>
                                        </div>
                                    </div>
                                ))}

                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 mt-4 mb-4">
                    <div className="card h-100">
                        <div className="card-header pb-0">
                            <h6>Favourites</h6>
                            <p className="text-sm">
                                <i className="fa fa-arrow-up text-success" aria-hidden="true"></i>
                                <span className="font-weight-bold">24</span>
                            </p>
                        </div>
                        <div className="card-body p-3">
                            <div className="timeline timeline-one-side">

                                {favourite.map((song, i) => (

                                    <div className="timeline-block mb-3" key={i}>
                                        <span className="timeline-step">
                                            <i className="material-icons text-success text-gradient"><svg xmlns="http://www.w3.org/2000/svg" transform="translate(0,-3)" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg></i>
                                        </span>
                                        <div className="timeline-content">
                                            <h6 className="text-dark text-sm font-weight-bold mb-0">{song.title}</h6>
                                            <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">{song.artist}</p>
                                        </div>
                                    </div>

                                ))}

                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mt-4 mb-3">
                    <div className="card h-100">
                        <div className="card-header pb-0">
                            <h6>Identified Songs</h6>
                            <p className="text-sm">
                                <i className="fa fa-arrow-up text-success" aria-hidden="true"></i>
                                <span className="font-weight-bold">10</span>
                            </p>
                        </div>
                        <div className="card-body p-3">
                            <div className="timeline timeline-one-side">

                                {shazam.map((song, i) => (

                                    <div className="timeline-block mb-3" key={i}>
                                        <span className="timeline-step">
                                            <i className="material-icons text-success text-gradient"><svg xmlns="http://www.w3.org/2000/svg" transform="translate(0,-3)" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z" /></svg></i>
                                        </span>
                                        <div className="timeline-content">
                                            <h6 className="text-dark font-weight-bold mb-0">{ song.title }</h6>
                                            <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">{ song.artist }</p>
                                        </div>
                                    </div>

                                ))}

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row mb-4">
                <div className="col-lg-8 col-md-6 mb-md-0 mb-4">
                    <div className="card">
                        <div className="card-header pb-0">
                            <div className="row">
                                <div className="col-lg-6 col-7">
                                    <h6>Quiz Stats Points</h6>
                                    <p className="text-sm mb-0">
                                        <i className="fa fa-check text-info" aria-hidden="true"></i>
                                        <span className="font-weight-bold ms-1">You have 40 points</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card-body px-0 pb-2" style={{ maxHeight: "300px", overflow: "auto" }}>
                            <div className="table-responsive">
                                <table className="table align-items-center mb-0">
                                    <thead>
                                        <tr>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Username</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Badge</th>
                                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Points</th>
                                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Completion</th>
                                        </tr>
                                    </thead>
                                    <tbody>


                                        <tr>
                                            <td>
                                                <div className="d-flex px-2 py-1">
                                                    <div>
                                                        <img src="../assets/img/team-1.jpg" alt="team1" className="avatar avatar-xs rounded-circle" />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">Toroyteach</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="avatar-group mt-2">
                                                    <a href="#" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                                        <img src={imageBadge} className="avatar avatar-sm me-3" alt="xd" />
                                                    </a>
                                                </div>
                                            </td>
                                            <td className="align-middle text-center text-sm">
                                                <span className="text-xs font-weight-bold"> 40 </span>
                                            </td>
                                            <td className="align-middle">
                                                <div className="progress-wrapper w-75 mx-auto">
                                                    <div className="progress-info">
                                                        <div className="progress-percentage">
                                                            <span className="text-xs font-weight-bold">60%</span>
                                                        </div>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-gradient-info w-60" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="d-flex px-2 py-1">
                                                    <div>
                                                        <img src="../assets/img/team-1.jpg" alt="team1" className="avatar avatar-xs rounded-circle" />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">Kiplagat</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="avatar-group mt-2">
                                                    <a href="#" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                                        <img src={imageBadge} className="avatar avatar-sm me-3" alt="xd" />
                                                    </a>
                                                </div>
                                            </td>
                                            <td className="align-middle text-center text-sm">
                                                <span className="text-xs font-weight-bold"> 35 </span>
                                            </td>
                                            <td className="align-middle">
                                                <div className="progress-wrapper w-75 mx-auto">
                                                    <div className="progress-info">
                                                        <div className="progress-percentage">
                                                            <span className="text-xs font-weight-bold">50%</span>
                                                        </div>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-gradient-info w-60" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="d-flex px-2 py-1">
                                                    <div>
                                                        <img src="../assets/img/team-1.jpg" alt="team1" className="avatar avatar-xs rounded-circle" />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">Alex</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="avatar-group mt-2">
                                                    <a href="#" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                                        <img src={imageBadge} className="avatar avatar-sm me-3" alt="xd" />
                                                    </a>
                                                </div>
                                            </td>
                                            <td className="align-middle text-center text-sm">
                                                <span className="text-xs font-weight-bold"> 20 </span>
                                            </td>
                                            <td className="align-middle">
                                                <div className="progress-wrapper w-75 mx-auto">
                                                    <div className="progress-info">
                                                        <div className="progress-percentage">
                                                            <span className="text-xs font-weight-bold">30%</span>
                                                        </div>
                                                    </div>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-gradient-info w-60" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="card h-100">
                        <div className="card-header pb-0">
                            <h6>My Commnets</h6>
                            <p className="text-sm">
                                <i className="fa fa-arrow-up text-success" aria-hidden="true"></i>
                                <span className="font-weight-bold">24%</span> this month
                            </p>
                        </div>
                        <div className="card-body p-3" style={{ maxHeight: "300px", overflow: "auto" }}>
                            <div className="timeline timeline-one-side">

                                {comments.map((song, i) => (

                                    <div className="timeline-block mb-3" key={i}>
                                        <span className="timeline-step">
                                            <i className="material-icons text-success text-gradient"><svg xmlns="http://www.w3.org/2000/svg" transform="translate(0,-3)" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" /></svg></i>
                                        </span>
                                        <div className="timeline-content">
                                            <h6 className="text-dark text-sm font-weight-bold mb-0">{ song.mixItem }</h6>
                                            <p className="text-secondary font-weight-bold text-xs mt-1 mb-0"> { song.dateCreated }</p>
                                            <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">{ song.content }.</p>
                                        </div>
                                    </div>

                                ))}

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
