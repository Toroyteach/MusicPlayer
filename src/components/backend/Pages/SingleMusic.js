import React from 'react'

export default function SingleMusic() {
  return (
    <>
            <div class="row">

            <div class="mb-4">

              <section class="border-bottom mb-4">
                <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(144).jpg"
                  class="img-fluid shadow-2-strong rounded-5 mb-4" alt="" />
    
              </section>


              <section class="text-center border-top border-bottom py-4 mb-4">

                <div class="row">
                  <div class="col-md-4">
                    <p><strong>Share with your friends:</strong></p>
    
                    <button type="button" class="btn btn-primary me-1" style={{ backgroundColor:"#3b5998"}}>
                      <i class="fab fa-facebook-f"></i>
                    </button>
                    <button type="button" class="btn btn-primary me-1" style={{ backgroundColor:"#55acee"}}>
                      <i class="fab fa-twitter"></i>
                    </button>
                    <button type="button" class="btn btn-primary me-1"style={{ backgroundColor:" #0082ca;"}}>
                      <i class="fab fa-linkedin"></i>
                    </button>
                  </div>
                  <div class="col-md-8">
                    <div class="stars">

                      <form action="">
                    
                        <input class="star star-5" id="star-5" type="radio" name="star"/>
                    
                        <label class="star star-5" for="star-5"></label>
                    
                        <input class="star star-4" id="star-4" type="radio" name="star"/>
                    
                        <label class="star star-4" for="star-4"></label>
                    
                        <input class="star star-3" id="star-3" type="radio" name="star"/>
                    
                        <label class="star star-3" for="star-3"></label>
                    
                        <input class="star star-2" id="star-2" type="radio" name="star"/>
                    
                        <label class="star star-2" for="star-2"></label>
                    
                        <input class="star star-1" id="star-1" type="radio" name="star"/>
                    
                        <label class="star star-1" for="star-1"></label>
                    
                      </form>
                    
                    </div>
                  </div>
                </div>
                  
              </section>


              <section class="border-bottom mb-4 pb-4">
                <div class="row">
                  <div class="col-3">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(23).jpg"
                      class="img-fluid shadow-1-strong rounded-5" alt="" />
                  </div>
    
                  <div class="col-9">
                    <p class="mb-2"><strong>Magnifico</strong></p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
                      inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
                      Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
                    </p>
                  </div>
                </div>
              </section>


                <div class="container my-5 py-5">
                  <div class="row d-flex justify-content-center">
                    <div class="col-md-12 col-lg-10">
                      <div class="card text-dark">
                        <div class="card-body p-4">
                          <h4 class="mb-0">Recent comments</h4>
                          <p class="fw-light mb-4 pb-2">Latest Comments section by users</p>
              
                          <div class="d-flex flex-start">
                            <img class="rounded-circle shadow-1-strong me-3"
                              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp" alt="avatar" width="60"
                              height="60" />
                            <div>
                              <h6 class="fw-bold mb-1">Maggie Marsh</h6>
                              <div class="d-flex align-items-center mb-3">
                                <p class="mb-0">
                                  March 07, 2021
                                  <span class="badge bg-primary">Pending</span>
                                </p>
                                <a href="#" class="link-muted"><i class="fas fa-pencil-alt ms-2"></i></a>
                                <a href="#" class="link-muted"><i class="fas fa-redo-alt ms-2"></i></a>
                                <a href="#" class="link-muted"><i class="fas fa-heart ms-2"></i></a>
                              </div>
                              <p class="mb-0">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                since the 1500s, when an unknown printer took a galley of type and
                                scrambled it.
                              </p>
                            </div>
                          </div>
                        </div>
              
                        <hr class="my-0" />
              
                        <div class="card-body p-4">
                          <div class="d-flex flex-start">
                            <img class="rounded-circle shadow-1-strong me-3"
                              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp" alt="avatar" width="60"
                              height="60" />
                            <div>
                              <h6 class="fw-bold mb-1">Lara Stewart</h6>
                              <div class="d-flex align-items-center mb-3">
                                <p class="mb-0">
                                  March 15, 2021
                                  <span class="badge bg-success">Approved</span>
                                </p>
                                <a href="#" class="link-muted"><i class="fas fa-pencil-alt ms-2"></i></a>
                                <a href="#" class="text-success"><i class="fas fa-redo-alt ms-2"></i></a>
                                <a href="#" class="link-danger"><i class="fas fa-heart ms-2"></i></a>
                              </div>
                              <p class="mb-0">
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
              
                        <hr class="my-0" style={{ height: "1px;"}}/>
              
                        <div class="card-body p-4">
                          <div class="d-flex flex-start">
                            <img class="rounded-circle shadow-1-strong me-3"
                              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(33).webp" alt="avatar" width="60"
                              height="60" />
                            <div>
                              <h6 class="fw-bold mb-1">Alexa Bennett</h6>
                              <div class="d-flex align-items-center mb-3">
                                <p class="mb-0">
                                  March 24, 2021
                                  <span class="badge bg-danger">Rejected</span>
                                </p>
                                <a href="#" class="link-muted"><i class="fas fa-pencil-alt ms-2"></i></a>
                                <a href="#" class="link-muted"><i class="fas fa-redo-alt ms-2"></i></a>
                                <a href="#" class="link-muted"><i class="fas fa-heart ms-2"></i></a>
                              </div>
                              <p class="mb-0">
                                There are many variations of passages of Lorem Ipsum available, but the
                                majority have suffered alteration in some form, by injected humour, or
                                randomised words which don't look even slightly believable. If you are
                                going to use a passage of Lorem Ipsum, you need to be sure.
                              </p>
                            </div>
                          </div>
                        </div>
              
                        <hr class="my-0" />
              
                        <div class="card-body p-4">
                          <div class="d-flex flex-start">
                            <img class="rounded-circle shadow-1-strong me-3"
                              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(24).webp" alt="avatar" width="60"
                              height="60" />
                            <div>
                              <h6 class="fw-bold mb-1">Betty Walker</h6>
                              <div class="d-flex align-items-center mb-3">
                                <p class="mb-0">
                                  March 30, 2021
                                  <span class="badge bg-primary">Pending</span>
                                </p>
                                <a href="#" class="link-muted"><i class="fas fa-pencil-alt ms-2"></i></a>
                                <a href="#" class="link-muted"><i class="fas fa-redo-alt ms-2"></i></a>
                                <a href="#" class="link-muted"><i class="fas fa-heart ms-2"></i></a>
                              </div>
                              <p class="mb-0">
                                It uses a dictionary of over 200 Latin words, combined with a handful of
                                model sentence structures, to generate Lorem Ipsum which looks
                                reasonable. The generated Lorem Ipsum is therefore always free from
                                repetition, injected humour, or non-characteristic words etc.
                              </p>
                            </div>
                          </div>
                        </div>

                        <hr class="my-0" />

                        <div class="card-footer py-3 border-0" style={{ backgroundColor: "#f8f9fa"}}>
                            <div class="d-flex flex-start w-100">
                              <img class="rounded-circle shadow-1-strong me-3"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp" alt="avatar" width="40"
                                height="40" />
                              <div class="form-outline w-100">
                                <textarea class="form-control" id="textAreaExample" rows="4"
                                  style={{ background: "#fff"}}></textarea>
                                <label class="form-label" for="textAreaExample">Message</label>
                              </div>
                            </div>
                            <div class="float-end mt-2 pt-1">
                              <button type="button" class="btn btn-primary btn-sm">Post comment</button>
                              <button type="button" class="btn btn-outline-primary btn-sm">Cancel</button>
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
