import { useState, useContext } from "react";

// import the file to allow changing of the language manually
import { useTranslation } from "react-i18next";

import endpoinUrl from "../api/base/endpointUrl";

import appContext from "../context/appContext";

const CommentForm = ({
    handleSubmit,
    submitLabel,
    hasCancelButton = false,
    handleCancel,
    initialText = "",
    userPic,
}) => {

    const {
        userData: {
            userImage,
        },
    } = useContext(appContext)

    const { t } = useTranslation();

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
                        src={endpoinUrl + userImage} alt="avatar" width="40"
                        height="40" />
                    <div className="form-outline w-100">
                        <textarea className="form-control" id="textAreaExample" rows="4"
                            style={{ boxShadow: "2px 5px 8px #888888" }} value={text} onChange={(e) => setText(e.target.value)} />
                        <label className="form-label" htmlFor="textAreaExample">{t("your-comment")}</label>
                    </div>
                </div>

                <div className="float-end mt-2 pt-1">

                    <button type="submit" className="btn btn-primary btn-sm" disabled={isTextareaDisabled}>{submitLabel}</button>

                    {hasCancelButton && (<button type="button" className="btn btn-outline-primary btn-sm" onClick={handleCancel} >{t("cancel")}</button>)}

                </div>

            </form>
        </div>

    );
};

export default CommentForm;