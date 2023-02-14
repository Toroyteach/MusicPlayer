import { t } from "i18next";
import CommentForm from "./CommentForm";

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

    const isEditing = activeComment && activeComment.id === comment.id && activeComment.type === "editting";

    const isReplying = activeComment && activeComment.id === comment.id && activeComment.type === "replying";

    const fiveMinutes = 300000;//5minutes

    const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;

    const canDelete = currentUserId === comment.userId && replies.length === 0 && !timePassed;

    const canReply = Boolean(currentUserId && ( parentId  === null ));

    const canEdit = currentUserId === comment.userId && !timePassed;

    const replyId = parentId ? parentId : comment.id;

    const createdAt = new Date(comment.createdAt).toLocaleDateString();

    return (
        <div key={comment.id} className="d-flex flex-start">

            <img className="rounded-circle shadow-1-strong me-3" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" width="65" height="65" />

            <div className="flex-grow-1 flex-shrink-1">
                <div>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-1">{comment.username} <span className="small">- {createdAt}</span> </p>
                        {canReply && (<a href="#!" onClick={() => setActiveComment({ id: comment.id, type: "replying" })} ><i className="fas fa-reply fa-xs"></i><span className="small">{t("reply")}</span></a>)}
                        {canEdit && (<a href="#!" onClick={() => setActiveComment({ id: comment.id, type: "editing" })}><i className="fas fa-reply fa-xs"></i><span className="small">{t("edit")}</span></a>)}
                        {canDelete && (<a href="#!" onClick={() => deleteComment(comment.id)}><i className="fas fa-reply fa-xs"></i><span className="small">{t("delete")}</span></a>)}
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
                        />
                    )}

                </div>

                {isReplying && (
                    <CommentForm
                        submitLabel="Reply"
                        handleSubmit={(text) => addComment(text, replyId)}
                    />
                )}

                {replies.length > 0 && (

                    <div className="d-flex flex-start mt-4">
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