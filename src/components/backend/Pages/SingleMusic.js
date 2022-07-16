import React from 'react'

import coverImage from '../music-app/music/Cover-Image.jpg';

export default function SingleMusic() {
  return (
    <>
      <div className="row container">

        <div className="mb-4">

          <section className="border-bottom mb-4">
            <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(144).jpg"
              className="img-fluid shadow-2-strong rounded-5 mb-4" alt="" />

          </section>


          <section className="text-center border-top border-bottom py-3 mb-4 card">

            <div className="row">
              <div className="col-md-4">
                <p><strong>Share with your friends:</strong></p>

                <button type="button" className="btn btn-primary me-1" style={{ backgroundColor: "#3b5998" }}>
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button type="button" className="btn btn-primary me-1" style={{ backgroundColor: "#55acee" }}>
                  <i className="fab fa-twitter"></i>
                </button>
                <button type="button" className="btn btn-primary me-1" style={{ backgroundColor: " ##bc2a8d" }}>
                  <i className="fab fa-instagram"></i>
                </button>
                <button type="button" className="btn btn-primary me-1" style={{ backgroundColor: " #25D366" }}>
                  <i className="fab fa-whatsapp"></i>
                </button>
              </div>
              <div className="col-md-8">
                <div className="stars">

                  <form action="">

                    <input className="star star-5" id="star-5" type="radio" name="star" />

                    <label className="star star-5" for="star-5"></label>

                    <input className="star star-4" id="star-4" type="radio" name="star" />

                    <label className="star star-4" for="star-4"></label>

                    <input className="star star-3" id="star-3" type="radio" name="star" />

                    <label className="star star-3" for="star-3"></label>

                    <input className="star star-2" id="star-2" type="radio" name="star" />

                    <label className="star star-2" for="star-2"></label>

                    <input className="star star-1" id="star-1" type="radio" name="star" />

                    <label className="star star-1" for="star-1"></label>

                  </form>

                </div>
              </div>
            </div>

          </section>


          <section className="border-bottom mb-4 py-3">

            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={coverImage} className="img-fluid rounded-start" alt="Magnifico"/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Magnifico</h5>
                    <p className="card-text">I dont have any good descrioption to talk about this mix. While i was creating it i had thought of the word TNT to mean that it is an exploseive mix tape but
                  later on i came to change it to Magnifico which would come to hit me that i have named this mix item as some spectacular and am not so sure how the viewers or
                  the fans are going to persieve it if not enjoy it haha. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..</p>
                  </div>
                </div>
              </div>
            </div>

          </section>


          <div className="container my-5 py-3">
            <div className="row d-flex justify-content-center">
              <div className="col-md-12 col-lg-10">
                <div className="card text-dark">
                  <div className="card-body p-4">
                    <h4 className="mb-0">Recent comments</h4>
                    <p className="fw-light mb-4 pb-2">Latest Comments section by users</p>

                    <div className="d-flex flex-start">
                      <img className="rounded-circle shadow-1-strong me-3"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp" alt="avatar" width="60"
                        height="60" />
                      <div>
                        <h6 className="fw-bold mb-1">Maggie Marsh</h6>
                        <div className="d-flex align-items-center mb-3">
                          <p className="mb-0">
                            March 07, 2021
                            <span className="badge bg-primary">Pending</span>
                          </p>
                          <a href="#" className="link-muted"><i className="fas fa-pencil-alt ms-2"></i></a>
                          <a href="#" className="link-muted"><i className="fas fa-redo-alt ms-2"></i></a>
                          <a href="#" className="link-muted"><i className="fas fa-heart ms-2"></i></a>
                        </div>
                        <p className="mb-0">
                          Lorem Ipsum is simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum has been the industry's standard dummy text ever
                          since the 1500s, when an unknown printer took a galley of type and
                          scrambled it.
                        </p>
                      </div>
                    </div>
                  </div>

                  <hr className="my-0" />

                  <div className="card-body p-4">
                    <div className="d-flex flex-start">
                      <img className="rounded-circle shadow-1-strong me-3"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp" alt="avatar" width="60"
                        height="60" />
                      <div>
                        <h6 className="fw-bold mb-1">Lara Stewart</h6>
                        <div className="d-flex align-items-center mb-3">
                          <p className="mb-0">
                            March 15, 2021
                            <span className="badge bg-success">Approved</span>
                          </p>
                          <a href="#" className="link-muted"><i className="fas fa-pencil-alt ms-2"></i></a>
                          <a href="#" className="text-success"><i className="fas fa-redo-alt ms-2"></i></a>
                          <a href="#" className="link-danger"><i className="fas fa-heart ms-2"></i></a>
                        </div>
                        <p className="mb-0">
                          Contrary to popular belief, Lorem Ipsum is not simply random text. It
                          has roots in a piece of classical Latin literature from 45 BC, making it
                          over 2000 years old. Richard McClintock, a Latin professor at
                          Hampden-Sydney College in Virginia, looked up one of the more obscure
                          Latin words, consectetur, from a Lorem Ipsum passage, and going through
                          the cites.
                        </p>
                      </div>
                    </div>
                  </div>

                  <hr className="my-0" style={{ height: "1px;" }} />

                  <div className="card-body p-4">
                    <div className="d-flex flex-start">
                      <img className="rounded-circle shadow-1-strong me-3"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(33).webp" alt="avatar" width="60"
                        height="60" />
                      <div>
                        <h6 className="fw-bold mb-1">Alexa Bennett</h6>
                        <div className="d-flex align-items-center mb-3">
                          <p className="mb-0">
                            March 24, 2021
                            <span className="badge bg-danger">Rejected</span>
                          </p>
                          <a href="#" className="link-muted"><i className="fas fa-pencil-alt ms-2"></i></a>
                          <a href="#" className="link-muted"><i className="fas fa-redo-alt ms-2"></i></a>
                          <a href="#" className="link-muted"><i className="fas fa-heart ms-2"></i></a>
                        </div>
                        <p className="mb-0">
                          There are many variations of passages of Lorem Ipsum available, but the
                          majority have suffered alteration in some form, by injected humour, or
                          randomised words which don't look even slightly believable. If you are
                          going to use a passage of Lorem Ipsum, you need to be sure.
                        </p>
                      </div>
                    </div>
                  </div>

                  <hr className="my-0" />

                  <div className="card-body p-4">
                    <div className="d-flex flex-start">
                      <img className="rounded-circle shadow-1-strong me-3"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(24).webp" alt="avatar" width="60"
                        height="60" />
                      <div>
                        <h6 className="fw-bold mb-1">Betty Walker</h6>
                        <div className="d-flex align-items-center mb-3">
                          <p className="mb-0">
                            March 30, 2021
                            <span className="badge bg-primary">Pending</span>
                          </p>
                          <a href="#" className="link-muted"><i className="fas fa-pencil-alt ms-2"></i></a>
                          <a href="#" className="link-muted"><i className="fas fa-redo-alt ms-2"></i></a>
                          <a href="#" className="link-muted"><i className="fas fa-heart ms-2"></i></a>
                        </div>
                        <p className="mb-0">
                          It uses a dictionary of over 200 Latin words, combined with a handful of
                          model sentence structures, to generate Lorem Ipsum which looks
                          reasonable. The generated Lorem Ipsum is therefore always free from
                          repetition, injected humour, or non-characteristic words etc.
                        </p>
                      </div>
                    </div>
                  </div>

                  <hr className="my-0" />

                  <div className="card-footer py-3 border-0" >
                    <div className="d-flex flex-start w-100">
                      <img className="rounded-circle shadow-1-strong me-3"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp" alt="avatar" width="40"
                        height="40" />
                      <div className="form-outline w-100">
                        <textarea className="form-control" id="textAreaExample" rows="4"
                          style={{ boxShadow: "2px 5px 8px #888888" }}></textarea>
                        <label className="form-label" for="textAreaExample">Message</label>
                      </div>
                    </div>
                    <div className="float-end mt-2 pt-1">
                      <button type="button" className="btn btn-primary btn-sm">Post comment</button>
                      <button type="button" className="btn btn-outline-primary btn-sm">Cancel</button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}
