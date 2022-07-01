import React from 'react'

export default function UploadQuiz() {
  return (
    <>
    <section class="container py-5">
        <div class="container">
            <div class="row ">
                <div class="col">
                {/* <!-- Name input --> */}
                <div class="form-outline">
                    <input type="text" id="form8Example1" class="form-control" />
                    <label class="form-label" for="form8Example1">Title</label>
                </div>
                </div>
                <div class="col">
                {/* <!-- Email input --> */}
                <div class="form-outline">
                    <input type="text" id="form8Example2" class="form-control" />
                    <label class="form-label" for="form8Example2">Artist</label>
                </div>
                </div>
            </div>
            
            <hr />
            <br/>
            
            <div class="row">
                    <div class="col">
                    {/* <!-- Name input --> */}
                    <div class="form-outline">
                        <input type="file" id="form8Example3" class="form-control" />
                        <label class="form-label" for="form8Example3">Instrumental Item</label>
                    </div>
                    </div>
                    <div class="col">
                    {/* <!-- Name input --> */}
                    <div class="form-outline">
                        <input type="file" id="form8Example4" class="form-control" />
                        <label class="form-label" for="form8Example4">Music Item</label>
                    </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                    {/* <!-- Name input --> */}
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                            <label class="form-check-label" for="flexSwitchCheckChecked">Live Status</label>
                        </div>
                    </div>
                </div>

            </div>
            <br/>
          {/* <!-- Submit button --> */}
          <div class="row">
            <div class="col-6">
                <button type="submit" class="btn btn-primary btn-block mb-4">Upload Mix</button>
            </div>
            <div class="col-6">
                <button type="submit" class="btn btn-primary btn-block mb-4">Update Mix</button>
            </div>
          </div>

        <div class="container-fluid py-4">
            <div class="row">
              <div class="col-12">
                <div class="card my-4">
                  <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                      <h6 class="text-white text-capitalize ps-3">Mixes</h6>
                    </div>
                  </div>
                  <div class="card-body px-0 pb-2">
                    <div class="table-responsive p-0">
                      <table class="table align-items-center mb-0">
                        <thead>
                          <tr>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Username</th>
                            <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                            <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Created</th>
                            <th class="text-secondary opacity-7"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div class="d-flex px-2 py-1">
                                <div>
                                  <img src="../assets/img/team-2.jpg" class="avatar avatar-sm me-3 border-radius-lg" alt="user1"/>
                                </div>
                                <div class="d-flex flex-column justify-content-center">
                                  <h6 class="mb-0 text-sm">John Michael</h6>
                                  <p class="text-xs text-secondary mb-0">john@creative-tim.com</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p class="text-xs font-weight-bold mb-0">Manager</p>
                              <p class="text-xs text-secondary mb-0">Organization</p>
                            </td>
                            <td class="align-middle text-center text-sm">
                              <span class="badge badge-sm bg-gradient-success">Online</span>
                            </td>
                            <td class="align-middle text-center">
                              <span class="text-secondary text-xs font-weight-bold">23/04/18</span>
                            </td>
                            <td class="align-middle">
                              <a href="#" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                Disable
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="d-flex px-2 py-1">
                                <div>
                                  <img src="../assets/img/team-3.jpg" class="avatar avatar-sm me-3 border-radius-lg" alt="user2"/>
                                </div>
                                <div class="d-flex flex-column justify-content-center">
                                  <h6 class="mb-0 text-sm">Alexa Liras</h6>
                                  <p class="text-xs text-secondary mb-0">alexa@creative-tim.com</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p class="text-xs font-weight-bold mb-0">Programator</p>
                              <p class="text-xs text-secondary mb-0">Developer</p>
                            </td>
                            <td class="align-middle text-center text-sm">
                              <span class="badge badge-sm bg-gradient-secondary">Offline</span>
                            </td>
                            <td class="align-middle text-center">
                              <span class="text-secondary text-xs font-weight-bold">11/01/19</span>
                            </td>
                            <td class="align-middle">
                              <a href="#" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                Disable
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="d-flex px-2 py-1">
                                <div>
                                  <img src="../assets/img/team-4.jpg" class="avatar avatar-sm me-3 border-radius-lg" alt="user3"/>
                                </div>
                                <div class="d-flex flex-column justify-content-center">
                                  <h6 class="mb-0 text-sm">Laurent Perrier</h6>
                                  <p class="text-xs text-secondary mb-0">laurent@creative-tim.com</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p class="text-xs font-weight-bold mb-0">Executive</p>
                              <p class="text-xs text-secondary mb-0">Projects</p>
                            </td>
                            <td class="align-middle text-center text-sm">
                              <span class="badge badge-sm bg-gradient-success">Online</span>
                            </td>
                            <td class="align-middle text-center">
                              <span class="text-secondary text-xs font-weight-bold">19/09/17</span>
                            </td>
                            <td class="align-middle">
                              <a href="#" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                Enable
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    
        </section>
    </>
  )
}
