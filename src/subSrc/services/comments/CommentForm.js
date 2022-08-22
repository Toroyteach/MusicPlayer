
import { useState } from "react";

const CommentForm = ({
    handleSubmit,
    submitLabel,
    hasCancelButton = false,
    handleCancel,
    initialText = "",
}) => {

    const [text, setText] = useState(initialText);

    const isTextareaDisabled = text.length === 0;

    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(text);
        setText("");
    };

    return (

        <div className="card-footer pb-6 border-0" >
            <form onSubmit={onSubmit}>

                <div className="d-flex flex-start w-100">
                    <img className="rounded-circle shadow-1-strong me-3"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp" alt="avatar" width="40"
                        height="40" />
                    <div className="form-outline w-100">
                        <textarea className="form-control" id="textAreaExample" rows="4"
                            style={{ boxShadow: "2px 5px 8px #888888" }} value={text} onChange={(e) => setText(e.target.value)} />
                        <label className="form-label" htmlFor="textAreaExample">Message</label>
                    </div>
                </div>

                <div className="float-end mt-2 pt-1">
                    
                    <button type="button" className="btn btn-primary btn-sm" disabled={isTextareaDisabled}>{submitLabel}</button>

                    {hasCancelButton && (<button type="button" className="btn btn-outline-primary btn-sm" onClick={handleCancel} >Cancel</button>)}

                </div>

            </form>
        </div>

    );
};

export default CommentForm;