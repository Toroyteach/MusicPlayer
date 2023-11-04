import React, { useContext, useEffect, useState } from 'react'


//user details context
import appContext from '../../../services/context/appContext.js'

import imageBadge from '../../../assets/users/img/small-logos/logo-xd.svg'
import userImageTable from '../../../assets/users/img/team-1.jpg'

import useQuery from '../../../services/api/base/useQuery.js'

//react translator hook
import { useTranslation } from "react-i18next";

export default function NeutralUsageStats() {

    const {
        userData: {
            firebaseUid,
            // history,
            favourite: {
                // favouriteCount,
                // favouriteItems
            },
            shazam: {
                // shazamCount,
                // shazamItems
            },
            comments: {
                // commentsCount,
                // commentsItems
            },
        },
        musicSettings: {
            mixList
        }
    } = useContext(appContext);

    //initiate tge translator
    const { t } = useTranslation();

    const [history, setHistory] = useState([]);
    const [historyCount, setHistoryCount] = useState([]);

    const [favouriteItems, setFavouriteItems] = useState([]);
    const [favouriteItemsCount, setFavouriteItemsCount] = useState([]);

    const [commentsItems, setCommentsItems] = useState([]);
    const [commentsItemsCount, setCommentsItemsCount] = useState([]);

    const [shazamItems, setShazamItems] = useState([]);
    const [shazamItemsCount, setShazamItemsCount] = useState([]);

    const [mixItems, setMixItems] = useState([]);

    const { data, loading, error } = useQuery(`/profile/userDashboard/${firebaseUid}`, 'GET');

    useEffect(() => {
        if (data) {
            if (data.status === 'success') {

                setHistory(data.data.history.historyData)
                setHistoryCount(data.data.history.historyCount)

                setFavouriteItems(data.data.favourite.favouriteData)
                setFavouriteItemsCount(data.data.favourite.favouriteCount)

                setCommentsItems(data.data.comment.comments)
                setCommentsItemsCount(data.data.comment.commentsCount)

                setShazamItems(data.data.shazam.shazamData)
                setShazamItemsCount(data.data.shazam.shazamCount)

                setMixItems(data.data.musicList)
            }
        }
    }, [data])

    return (
        <>
            <div className="row mt-0">
                <div className="col-lg-4 col-md-6 mt-4 mb-4">
                    <div className="card h-100">
                        <div className="card-header pb-0">
                            <h6>{t("history-plays")}</h6>
                            <p className="text-sm">
                                <i className="fa fa-arrow-up text-success" aria-hidden="true"></i>
                            </p>
                        </div>
                        <div className="card-body p-3" style={{ maxHeight: "200px", overflow: "auto" }}>

                            <div className="timeline timeline-one-side">

                                {history.map((song, i) => (
                                    <div className="timeline-block mb-3" key={i}>
                                        <span className="timeline-step">
                                            <i className="material-icons text-success text-gradient"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><g transform="translate(0,-4)"><path d="M0 0h24v24H0z" fill="none" /><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" /></g></svg></i>
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
                            <h6>{t("favourites")}</h6>
                            <p className="text-sm">
                                <i className="fa fa-arrow-up text-success" aria-hidden="true"></i>
                                <span className="font-weight-bold">{favouriteItemsCount}</span>
                            </p>
                        </div>
                        <div className="card-body p-3" style={{ maxHeight: "200px", overflow: "auto" }}>
                            <div className="timeline timeline-one-side">

                                {(favouriteItems || []).map((song, i) => (

                                    <div className="timeline-block mb-3" key={i}>
                                        <span className="timeline-step">
                                            <i className="material-icons text-success text-gradient"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><g transform="translate(0,-4)"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></g></svg></i>
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
                            <h6>{t("identified-songs")}</h6>
                            <p className="text-sm">
                                <i className="fa fa-arrow-up text-success" aria-hidden="true"></i>
                                <span className="font-weight-bold">{shazamItemsCount}</span>
                            </p>
                        </div>
                        <div className="card-body p-3">
                            <div className="timeline timeline-one-side" style={{ maxHeight: "200px", overflow: "auto" }}>

                                {(shazamItems || []).map((song, i) => (

                                    <div className="timeline-block mb-3" key={i}>
                                        <span className="timeline-step">
                                            <i className="material-icons text-success text-gradient"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><g transform="translate(0,-4)"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z" /></g></svg></i>
                                        </span>
                                        <div className="timeline-content">
                                            <h6 className="text-dark font-weight-bold mb-0">{song.title}</h6>
                                            <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">{song.artist}</p>
                                        </div>
                                    </div>

                                ))}

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {loading &&
                <div className='container text-center'>
                    <span class="loader"></span>
                </div>
            }

            <div className="row mb-4">
                <div className="col-lg-8 col-md-6 mb-md-0 mb-4">
                    <div className="card">
                        <div className="card-header pb-0">
                            <div className="row">
                                <div className="col-lg-6 col-7">
                                    <h6>{t("quiz-stats-points")}</h6>
                                </div>
                            </div>
                        </div>
                        <div className="card-body px-0 pb-2" style={{ maxHeight: "300px", overflow: "auto" }}>
                            <div className="table-responsive">
                                <table className="table align-items-center mb-0">
                                    <thead>
                                        <tr>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">{t("name")}</th>
                                            <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Genre</th>
                                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">{t("songs-count")}</th>
                                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">{t("duration")}</th>
                                        </tr>
                                    </thead>
                                    <tbody>


                                        {(mixItems || []).map((song, i) => (

                                            <tr key={i}>
                                                <td>
                                                    <div className="d-flex px-2 py-1">
                                                        <div className="d-flex flex-column justify-content-center">
                                                            <h6 className="mb-0 text-sm text-secondary">{song.title}</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="avatar-group mt-2 text-secondary">
                                                        {song.genre}
                                                    </div>
                                                </td>
                                                <td className="align-middle text-center text-sm text-secondary">
                                                    <span className="text-xs font-weight-bold"> {song.songsCount} </span>
                                                </td>
                                                <td className="align-middle">
                                                    <div className="progress-wrapper w-20 mx-auto">
                                                        <div className="progress-info">
                                                            <div className="progress-percentage text-secondary">
                                                                <span className="text-xs font-weight-bold">{song.duration}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                        ))}


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="card h-100">
                        <div className="card-header pb-0">
                            <h6>{t("my-comments")}</h6>
                            <p className="text-sm">
                                <i className="fa fa-arrow-up text-success" aria-hidden="true"></i>
                                <span className="font-weight-bold">{commentsItemsCount}</span>
                            </p>
                        </div>
                        <div className="card-body p-3" style={{ maxHeight: "300px", overflow: "auto" }}>
                            <div className="timeline timeline-one-side">

                                {(commentsItems || []).map((song, i) => (

                                    <div className="timeline-block mb-3" key={i}>
                                        <span className="timeline-step">
                                            <i className="material-icons text-success text-gradient"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><g transform="translate(0,-4)"><path d="M0 0h24v24H0z" fill="none" /><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" /></g></svg></i>
                                        </span>
                                        <div className="timeline-content">
                                            <h6 className="text-dark text-sm font-weight-bold mb-0">{song.mixItem}</h6>
                                            <p className="text-secondary font-weight-bold text-xs mt-1 mb-0"> {song.dateCreated}</p>
                                            <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">{song.body}.</p>
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
