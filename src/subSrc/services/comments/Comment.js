import { t } from "i18next";
import CommentForm from "./CommentForm";

import endpoinUrl from "../api/base/endpointUrl";

// import the file to allow changing of the language manually
import { useTranslation } from "react-i18next";

const Comment = ({
    comment,
    replies,
    setActiveComment,
    activeComment,
    updateComment,
    deleteComment,
    addComment,
    parentId = null,
    currentUserId,
}) => {

    //initiate tge translator
    const { t } = useTranslation();

    const isEditing = activeComment && activeComment.id === comment.id && activeComment.type === "editing";

    const isReplying = activeComment && activeComment.id === comment.id && activeComment.type === "replying";

    const fiveMinutes = 300000;//5minutes

    const timePassed = new Date() - new Date(comment.dateCreated) > fiveMinutes;

    const canDelete = currentUserId === comment.userId && replies.length === 0;

    const canReply = Boolean(currentUserId && (parentId === null));

    const canEdit = currentUserId === comment.userId && !timePassed;

    const replyId = parentId ? parentId : comment.id;

    const dateCreated = new Date(comment.dateCreated);

    return (
        <div key={comment.id} className="d-flex flex-start">

            <img className="rounded-circle shadow-1-strong me-3" src={endpoinUrl+comment.userPic} alt="avatar" width="65" height="65" />

            <div className="flex-grow-1 flex-shrink-1 text-body">
                <div>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-1">{comment.username} <span className="small">- {comment.dateCreated}</span> </p>
                        {canReply && (<a href="#!" onClick={() => setActiveComment({ id: comment.id, type: "replying" })} ><i className="fas fa-reply fa-s"></i><span className="small">  {t("reply")}</span></a>)}
                        {/* {canEdit && (<a href="#!" onClick={() => setActiveComment({ id: comment.id, type: "editing" })}><i className="fas fa-reply fa-xs"></i><span className="small">{t("edit")}</span></a>)} */}
                        {canDelete && (<a href="#!" onClick={() => deleteComment(comment.id)}><i className="fas fa-trash fa-s"></i> {t("delete")}</a>)}
                    </div>

                    {!isEditing && <p className="small mb-0">{comment.body}</p>}

                    {isEditing && (
                        <CommentForm
                            submitLabel={t("update")}
                            hasCancelButton
                            initialText={comment.body}
                            handleSubmit={(text) => updateComment(text, comment.id)}
                            handleCancel={() => {
                                setActiveComment(null);
                            }}
                            userPic={endpoinUrl+comment.userPic}
                        />
                    )}

                </div>

                {isReplying && (
                    <CommentForm
                        submitLabel="Reply"
                        handleSubmit={(text) => addComment(text, replyId)}
                        userPic={endpoinUrl+comment.userPic}
                    />
                )}

                {replies.length > 0 && (

                    <div className="mt-4">
                        {replies.map((reply) => (
                            <Comment
                                comment={reply}
                                key={reply.id}
                                setActiveComment={setActiveComment}
                                activeComment={activeComment}
                                updateComment={updateComment}
                                deleteComment={deleteComment}
                                addComment={addComment}
                                parentId={comment.id}
                                replies={[]}
                                currentUserId={currentUserId}
                            />
                        ))}
                    </div>

                )}

            </div>
        </div>
    );
};

export default Comment;