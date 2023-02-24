import React from "react";
import { useTranslation } from "react-i18next";

const ImageGen = () => {

    //initiate tge translator
    const { t } = useTranslation();

    return (
        <>
            <div className="container-flud" id="imageGen">
                <div className="imageGen container">
                <br />

                    <div className="curator_title">Generate Images</div>

                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label text-body">Type a Decription to genrate an image from</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                                </div>
                            </div>


                            <div className="col-md-6">
                                <br />
                                <div className="row">
                                    <div className="col-md-6">
                                        <button type="button" className="btn btn-outline-secondary">Submit</button>
                                    </div>
                                    <div className="col-md-6">
                                        <button type="button" className="btn btn-outline-success">Save Image</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <br/>

                    <div className="container-fluid">
                        <figure class="figure">
                            <img src="https://via.placeholder.com/1700x700" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure." />
                            <figcaption class="figure-caption text-right">Your generate Image will Appear here.</figcaption>
                        </figure>
                    </div>

                </div>

            </div>
        </>
    );
}

export default ImageGen;