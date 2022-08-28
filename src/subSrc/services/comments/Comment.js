import CommentForm from "./CommentForm";

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

    const isEditing = activeComment && activeComment.id === comment.id && activeComment.type === "editing";

    const isReplying = activeComment && activeComment.id === comment.id && activeComment.type === "replying";

    const fiveMinutes = 300000;//5minutes

    const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;

    const canDelete = currentUserId === comment.userId && replies.length === 0 && !timePassed;

    const canReply = Boolean(currentUserId);

    const canEdit = currentUserId === comment.userId && !timePassed;

    const replyId = parentId ? parentId : comment.id;

    const createdAt = new Date(comment.createdAt).toLocaleDateString();

    return (
        <div key={comment.id} class="d-flex flex-start">

            <img class="rounded-circle shadow-1-strong me-3" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" width="65" height="65" />

            <div class="flex-grow-1 flex-shrink-1">
                <div>
                    <div class="d-flex justify-content-between align-items-center">
                        <p class="mb-1">{comment.username} <span class="small">- {createdAt}</span> </p>
                        {canReply && (<a href="#!" onClick={() => setActiveComment({ id: comment.id, type: "replying" })} ><i class="fas fa-reply fa-xs"></i><span class="small"> Reply</span></a>)}
                        {canEdit && (<a href="#!" onClick={() => setActiveComment({ id: comment.id, type: "editing" })}><i class="fas fa-reply fa-xs"></i><span class="small"> Edit</span></a>)}
                        {canDelete && (<a href="#!" onClick={() => deleteComment(comment.id)}><i class="fas fa-reply fa-xs"></i><span class="small"> Delete</span></a>)}
                    </div>

                    {!isEditing && <p class="small mb-0">{comment.body}</p>}

                    {isEditing && (
                        <CommentForm
                            submitLabel="Update"
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

                    <div class="d-flex flex-start mt-4">
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