import React from 'react'

export default function UserProfile() {
  return (
    <>
        <div class="container-fluid px-2 px-md-4">
      <div class="page-header max-height-300 border-radius-xl mt-4">
        <img src="../assets/img/new/apocalypticsunset_pe.png" alt="profile_image" class="background_image"/>
        <span class="mask  bg-gradient-primary  opacity-3"></span>
      </div>
      <div class="card card-body mx-3 mx-md-4 mt-n6">
        <div class="row gx-4 mb-2">
          <div class="col-auto">
            <div class="avatar avatar-xl position-relative">
              <img src="../assets/img/bruce-mars.jpg" alt="profile_image" class="w-100 border-radius-lg shadow-sm"/>
            </div>
          </div>
          <div class="col-auto my-auto">
            <div class="h-100">
              <h5 class="mb-1">
                Anthony Toroyteach
              </h5>
              <p class="mb-0 font-weight-normal text-sm">
                Toroyteach
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
            {/* <!-- <div class="nav-wrapper position-relative end-0">
              <ul class="nav nav-pills nav-fill p-1" role="tablist">
                <li class="nav-item">
                  <a class="nav-link mb-0 px-0 py-1 active " data-bs-toggle="tab" href="#" role="tab" aria-selected="true">
                    <i class="material-icons text-lg position-relative">home</i>
                    <span class="ms-1">App</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mb-0 px-0 py-1 " data-bs-toggle="tab" href="#" role="tab" aria-selected="false">
                    <i class="material-icons text-lg position-relative">email</i>
                    <span class="ms-1">Messages</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mb-0 px-0 py-1 " data-bs-toggle="tab" href="#" role="tab" aria-selected="false">
                    <i class="material-icons text-lg position-relative">settings</i>
                    <span class="ms-1">Settings</span>
                  </a>
                </li>
              </ul>
            </div> --> */}
          </div>
        </div>
        <div class="row">
          <div class="row">
            <div class="col-12 col-xl-4">
              <div class="card card-plain h-100">
                <div class="card-header pb-0 p-3">
                  <div class="row">
                    <div class="col-md-8 d-flex align-items-center">
                      <h6 class="mb-0">Profile Information</h6>
                    </div>
                    <div class="col-md-4 text-end">
                      <a href="javascript:;">
                        <i class="fas fa-user-edit text-secondary text-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="card-body p-3">
                  <p class="text-sm">
                    Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
                  </p>
                  <hr class="horizontal gray-light my-4"/>
                  <ul class="list-group">
                    <li class="list-group-item border-0 ps-0 pt-0 text-sm"><strong class="text-dark">Full Name:</strong> &nbsp; Anthony Toroyteach</li>
                    <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Mobile:</strong> &nbsp; (44) 123 1234 123</li>
                    <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Email:</strong> &nbsp; toroyteach@gmail.com</li>
                    <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Username:</strong> &nbsp; Toroyteach</li>
                    <li class="list-group-item border-0 ps-0 pb-0">
                      <button type="button" data-toggle="modal" data-target="#modalRegisterForm" class="btn btn-outline-danger btn-rounded" data-mdb-ripple-color="dark">Delete My account together with data</button> &nbsp;
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-12 col-xl-4">
              <div class="card card-plain h-100">
                <div class="card-header pb-0 p-3">
                  <h6 class="mb-0">Platform Settings</h6>
                </div>
                <div class="card-body p-3">
                  <h6 class="text-uppercase text-body text-xs font-weight-bolder">Account</h6>
                  <ul class="list-group">
                    <li class="list-group-item border-0 px-0">
                      <div class="form-check form-switch ps-0">
                        <input class="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault" checked/>
                        <label class="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault">Show other Listeners my online status</label>
                      </div>
                    </li>
                    <li class="list-group-item border-0 px-0">
                      <div class="form-check form-switch ps-0">
                        <input class="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault1"/>
                        <label class="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault1">Show others my comment on Mix Item</label>
                      </div>
                    </li>
                    <li class="list-group-item border-0 px-0">
                      <div class="form-check form-switch ps-0">
                        <input class="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault2" checked/>
                        <label class="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault2">Allow Random Music Quizes</label>
                      </div>
                    </li>
                    <li class="list-group-item border-0 px-0">
                      <div class="form-check form-switch ps-0">
                        <input class="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault2" checked/>
                        <label class="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault2">Enable Artificial Weather</label>
                      </div>
                    </li>
                  </ul>
                  <ul class="list-group">
                    <li class="list-group-item border-0 px-0">
                      <div class="row">
                        
                        <div class="col-6">
                          <h6 class="text-uppercase text-body text-xs font-weight-bolder mt-4">Application Dark Theme</h6>
                          <div class="form-check form-switch ps-0">
                            <input class="form-check-input mt-1 ms-auto" type="checkbox" id="dark-version" onclick="darkMode(this)"/>
                          </div>
                        </div>
                        <div class="col-6">
                          <h6 class="text-uppercase text-body text-xs font-weight-bolder mt-4">Music Player Theme</h6>
                          <div class="form-check form-switch ps-0">
                            <select class="select">
                              <option value="1">Default</option>
                              <option value="2">Dark</option>
                              <option value="2">Custom</option>
                            </select>
                          </div>
                        </div>
                        
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-12 col-xl-4">

            </div>
            <div class="col-12 mt-4">

            </div>

          </div>
        </div>
      </div>
    </div>

    {/* <!-- Modal to update user details --> */}
    <div class="modal fade" id="modalRegisterForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header text-center">
            <h4 class="modal-title w-100 font-weight-bold">Sign up</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body mx-3">
            <div class="md-form mb-5">
              <i class="fas fa-user prefix grey-text"></i>
              <input type="text" id="orangeForm-name" class="form-control validate"/>
              <label data-error="wrong" data-success="right" for="orangeForm-name">Your firstname</label>
            </div>
            <div class="md-form mb-5">
              <i class="fas fa-user prefix grey-text"></i>
              <input type="text" id="orangeForm-name" class="form-control validate"/>
              <label data-error="wrong" data-success="right" for="orangeForm-name">Your lastname</label>
            </div>
            <div class="md-form mb-5">
              <i class="fas fa-envelope prefix grey-text"></i>
              <input type="email" id="orangeForm-email" class="form-control validate"/>
              <label data-error="wrong" data-success="right" for="orangeForm-email">Your email</label>
            </div>

            <div class="md-form mb-5">
              <i class="fas fa-envelope prefix grey-text"></i>
              <input type="email" id="orangeForm-email" class="form-control validate"/>
              <label data-error="wrong" data-success="right" for="orangeForm-email">Your number</label>
            </div>

            <div class="md-form mb-5">
              <i class="fas fa-envelope prefix grey-text"></i>
              <input type="email" id="orangeForm-email" class="form-control validate"/>
              <label data-error="wrong" data-success="right" for="orangeForm-email">Username</label>
            </div>

            <div class="md-form mb-4">
              <i class="fas fa-lock prefix grey-text"></i>
              <input type="password" id="orangeForm-pass" class="form-control validate"/>
              <label data-error="wrong" data-success="right" for="orangeForm-pass">Your password</label>
            </div>

          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button class="btn btn-deep-orange">Sign up</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
