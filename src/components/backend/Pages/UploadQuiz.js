import React from 'react'

export default function UploadQuiz() {
  return (
    <>
      <section className="container py-5"  style={{ background: "#f4f4f4" }}>
        <div className="container">
          <div className="row ">
            <div className="col">
              {/* <!-- Name input --> */}
              <div className="form-outline">
                <input type="text" id="form8Example1" className="form-control" />
                <label className="form-label" for="form8Example1">Title</label>
              </div>
            </div>
            <div className="col">
              {/* <!-- Email input --> */}
              <div className="form-outline">
                <input type="text" id="form8Example2" className="form-control" />
                <label className="form-label" for="form8Example2">Artist</label>
              </div>
            </div>
          </div>

          <hr />
          <br />

          <div className="row">
            <div className="col">
              {/* <!-- Name input --> */}
              <div className="form-outline">
                <input type="file" id="form8Example3" className="form-control" />
                <label className="form-label" for="form8Example3">Instrumental Item</label>
              </div>
            </div>
            <div className="col">
              {/* <!-- Name input --> */}
              <div className="form-outline">
                <input type="file" id="form8Example4" className="form-control" />
                <label className="form-label" for="form8Example4">Music Item</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              {/* <!-- Name input --> */}
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                <label className="form-check-label" for="flexSwitchCheckChecked">Live Status</label>
              </div>
            </div>
          </div>

        </div>
        <br />
        {/* <!-- Submit button --> */}
        <div className="row">
          <div className="col-6">
            <button type="submit" className="btn btn-primary btn-block mb-4">Upload Mix</button>
          </div>
          <div className="col-6">
            <button type="submit" className="btn btn-primary btn-block mb-4">Update Mix</button>
          </div>
        </div>

        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                    <h6 className="text-white text-capitalize ps-3">Mixes</h6>
                  </div>
                </div>
                <div className="card-body px-0 pb-2">
                  <div className="table-responsive p-0">
                    <table className="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Username</th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Created</th>
                          <th className="text-secondary opacity-7"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img src="../assets/img/team-2.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user1" />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">John Michael</h6>
                                <p className="text-xs text-secondary mb-0">john@creative-tim.com</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-xs font-weight-bold mb-0">Manager</p>
                            <p className="text-xs text-secondary mb-0">Organization</p>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-success">Online</span>
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
                          </td>
                          <td className="align-middle">
                            <a href="/#" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                              Disable
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img src="../assets/img/team-3.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user2" />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">Alexa Liras</h6>
                                <p className="text-xs text-secondary mb-0">alexa@creative-tim.com</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-xs font-weight-bold mb-0">Programator</p>
                            <p className="text-xs text-secondary mb-0">Developer</p>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-secondary">Offline</span>
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">11/01/19</span>
                          </td>
                          <td className="align-middle">
                            <a href="/#" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                              Disable
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img src="../assets/img/team-4.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user3" />
                              </div>
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">Laurent Perrier</h6>
                                <p className="text-xs text-secondary mb-0">laurent@creative-tim.com</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="text-xs font-weight-bold mb-0">Executive</p>
                            <p className="text-xs text-secondary mb-0">Projects</p>
                          </td>
                          <td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-success">Online</span>
                          </td>
                          <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">19/09/17</span>
                          </td>
                          <td className="align-middle">
                            <a href="/#" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
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
