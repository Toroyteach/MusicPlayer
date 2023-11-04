import { useState, useEffect, useContext } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";

import endpoinUrl from "../api/base/endpointUrl";

import { useCookies, Cookies } from "react-cookie";

import apiClient from "../api/base/apiClient";

import useQuery from "../api/base/useQuery.js"

import appContext from "../context/appContext";

import {
    getComments as getCommentsApi,
    createComment as createCommentApi,
    updateComment as updateCommentApi,
    deleteComment as deleteCommentApi,
} from "./api";

// import the file to allow changing of the language manually
import { useTranslation } from "react-i18next";

const Comments = ({ currentMixName, currentUserId, currentMixId }) => {

    const {
        userData: {
            userImage,
            firebaseUid,
            allowComments,
            username,
        },
    } = useContext(appContext)

    //initiate tge translator
    const { t } = useTranslation();

    const [backendComments, setBackendComments] = useState([]);

    const [activeComment, setActiveComment] = useState(null);

    const [cookie, setCookie, removeCookie] = useCookies(["userToken"]);

    const { data, loading, error } = useQuery(`/comments/singleMix/${currentMixId}`, 'GET');
    const [load, setLoad] = useState(false);

    const rootComments = backendComments.filter(
        (backendComment) => backendComment.parentId === null
    );

    const getReplies = (commentId) => backendComments
        .filter((backendComment) => backendComment.parentId === commentId)
        .sort(
            (a, b) =>
                new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime()
        );

    const addComment = (text, parentId) => {

        const now = new Date();

        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
            timeZoneName: 'short',
            timeZone: 'UTC',
        };

        const dateTimeString = new Intl.DateTimeFormat('en-US', options).format(now);


        const cookies = new Cookies();
        const accessToken = cookies.get('userToken')
        const commentData = {
            id: Math.random().toString(36).substr(2, 9),
            body: text,
            parentId: parentId ? parentId : null,
            userId: firebaseUid,
            username: username,
            dateCreated: dateTimeString,
            mixItem: currentMixName,
            mixItemId: currentMixId,
            status: "allow",
            publicView: allowComments,
            userPic: userImage ?? '',
        }

        setLoad(true)

        // Make post request to change the status
        apiClient.post('/comments/', commentData, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then(response => {

                setLoad(false)

                if (response.data.status === 'succes') {

                    setBackendComments([response.data.data, ...backendComments]);
                }


            })
            .catch(error => {

                setLoad(false)
                console.log('Error')

            });

        // createCommentApi(text, parentId).then((comment) => {
        //     setBackendComments([comment, ...backendComments]);
        //     setActiveComment(null);
        // });
    };

    const updateComment = (text, commentId) => {
        //     updateCommentApi(text).then(() => {
        //         const updatedBackendComments = backendComments.map((backendComment) => {
        //             if (backendComment.id === commentId) {
        //                 return { ...backendComment, body: text };
        //             }
        //             return backendComment;
        //         });
        //         setBackendComments(updatedBackendComments);
        //         setActiveComment(null);
        //     });
    };

    const deleteComment = (commentId) => {
        if (window.confirm("Are you sure you want to Delete comment?")) {

            const cookies = new Cookies();
            const accessToken = cookies.get('userToken')

            apiClient.delete(`/comments/delete/${commentId}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
                .then(response => {

                    if (response.data.status === "success") {

                        const updatedBackendComments = backendComments.filter(
                            (backendComment) => backendComment.id !== commentId
                        );
                        setBackendComments(updatedBackendComments);

                    }

                })
                .catch(error => {


                });

            // deleteCommentApi().then(() => {
            //     const updatedBackendComments = backendComments.filter(
            //         (backendComment) => backendComment.id !== commentId
            //     );
            //     setBackendComments(updatedBackendComments);
            // });
        }
    };

    useEffect(() => {
        if (data) {
            if (data.status === 'success') {
                setBackendComments(data.data);
                // console.log(data.data)

                // getCommentsApi().then((data) => {
                //     setBackendComments(data);
                // });
            }
        }
    }, [data]);

    return (
        <>
            {load &&
                <div className='container text-center'>
                    <span class="loader"></span>
                </div>
            }

            <CommentForm submitLabel={t("comment")} handleSubmit={addComment} />
            {/* <div className="comments-container"> */}

            {rootComments.map((rootComment) => (
                <Comment
                    key={rootComment.id}
                    comment={rootComment}
                    replies={getReplies(rootComment.id)}
                    activeComment={activeComment}
                    setActiveComment={setActiveComment}
                    addComment={addComment}
                    deleteComment={deleteComment}
                    updateComment={updateComment}
                    currentUserId={firebaseUid}
                />
            ))}

            {/* </div> */}
        </>
    );
};

export default Comments;