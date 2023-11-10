import React, { useState, useEffect, useContext } from 'react'

import Cookies from 'universal-cookie';

import appContext from '../../services/context/appContext';

import { useQuery } from 'react-query';

import apiEndUrl from '../../services/api/base/apiEndurl';

import endpoinUrl from '../../services/api/base/endpointUrl';

import apiClient from '../../services/api/base/apiClient';

import warningIcon from '../../layouts/components/toast/toastSvg/error.svg';
import checkIcon from '../../layouts/components/toast/toastSvg/check.svg';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import { SET_NOTIFIATION_TEXT_ITEM } from '../../services/context/appState/stateTypes';

import '../../../subSrc/assets/users/mdcomment.css';


export default function Comments() {

    const {
        stateDispatch,
    } = useContext(appContext)

    const cookies = new Cookies();
    const accessToken = cookies.get('userToken')
    const [mixId, setMixId] = useState();
    const [commentsData, setCommentsData] = useState([])
    const [mixList, setMixList] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchCommentsFiles = async () => {
        const header = {
            headers: { Authorization: `Bearer ${accessToken}` }
        }
        const res = await fetch(`${apiEndUrl}comments/singlemix/${mixId}`, header);
        const dataBody = await res.json()
        return dataBody;
    };

    const { isLoading, isError, error, data: commentData, refetch, remove, status } = useQuery('fetchComments', fetchCommentsFiles, {
        refetchOnWindowFocus: false,
        enabled: false,
    },);

    const dispatchNotification = (data) => {

        const notice = {
            id: Math.floor((Math.random() * 101) + 1),
            title: data.type,
            description: data.text,
            backgroundColor: data.bgColour,
            icon: data.icon
        };

        stateDispatch({ type: SET_NOTIFIATION_TEXT_ITEM, data: notice });

    }

    const selectMixItem = (v) => {

        remove('fetchComments')

        setCommentsData([])

        setMixId(v)

        refetch()

    }

    const disableCommentOnMixItem = (v) => {

        const commentStatus = {
            status: (v.status === "allow") ? "disable" : "allow"
        }

        const mixRefId = v.mixId;

        setLoading(true)
        //Make post request to change the status
        apiClient.patch(`/admin/disableUserCommentOnMix/${mixRefId}`, commentStatus, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then(response => {

                setLoading(false)

                if (response.data.status === 'succes') {

                    let data = {
                        type: "Sucess",
                        text: "Succseffuly",
                        icon: checkIcon,
                        bgColour: '#5cb85c',
                    }

                    dispatchNotification(data)

                    refetch()
                }


            })
            .catch(error => {

                setLoading(false)
                let data = {
                    type: "Error",
                    text: "Error failed to",
                    icon: warningIcon,
                    bgColour: '#f0ad4e',
                }

                dispatchNotification(data)

            });
    }

    useEffect(() => {

        if (commentData) {

            if (commentData.status === "success") {

                setCommentsData(commentData.data)
            }
        }

    }, [commentData])

    useEffect(() => {

        apiClient.get('/music/getMix', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then(response => {

                if (response.data.status === 'success') {

                    setMixList(response.data.data.mix.mixData)

                }

            })
            .catch(error => {

                let data = {
                    type: "Error",
                    text: "Error Getting Mix List",
                    icon: warningIcon,
                    bgColour: '#f0ad4e',
                }

                dispatchNotification(data)

            });

    }, [])

    return (
        <div style={{ position: "relative", top: "5vh", overflowy: "auto" }}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={2}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>

                                {(mixList || []).map((mix, i) => (
                                    <Nav.Link eventKey={mix.mixId} key={i} onClick={() => selectMixItem(mix.mixId)}>{mix.title}</Nav.Link>
                                ))}
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={10}>
                        <Tab.Content>
                            {(mixList || []).map((mix, i) => (
                                <Tab.Pane eventKey={mix.mixId}>
                                    <div className="container-fluid py-5">

                                        {(isLoading || loading) &&
                                            <div className='container text-center'>
                                                <span class="loader"></span>
                                            </div>
                                        }

                                        <div className="row">
                                            <div className="col-12">

                                                <div className="horizontal-timeline">

                                                    <ul className="list-inline items">


                                                        {(commentsData || []).map((comment, i) => (

                                                            <li className="list-inline-item items-list" key={i}>
                                                                <div className="px-4">
                                                                    <div className="form-switch">
                                                                        <input onChange={() => disableCommentOnMixItem({ status: comment.status, mixId: comment.id })} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={(comment.status === "allow") ? true : false} />
                                                                    </div>
                                                                    <br />
                                                                    <p className="">{comment.username}</p>
                                                                    <img class="rounded-circle shadow-1-strong me-3"
                                                                        src={endpoinUrl + comment.userPic} alt="avatar" width="65"
                                                                        height="65" />
                                                                    <br />
                                                                    <br />
                                                                    <span class="badge bg-secondary">{comment.body}</span>
                                                                    <br />
                                                                    <div>
                                                                        <br />
                                                                        <p>{comment.dateCreated}</p>
                                                                    </div>
                                                                </div>
                                                            </li>

                                                        ))}

                                                    </ul>

                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </Tab.Pane>
                            ))}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}
