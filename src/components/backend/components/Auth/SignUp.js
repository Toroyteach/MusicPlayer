import React from 'react'

import backgroundImage from '../../../../assets/backend/img/illustrations/illustration-signup.jpg'

export default function SignUp() {
  return (
    <>
      <main className="main-content  mt-0">
        <section>
          <div className="page-header min-vh-100">
            <div className="container">
              <div className="row">
                <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
                  <div className="position-relative bg-gradient-secondary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center" style={{ backgroundImage: 'url(' + backgroundImage + ')', backgroundSize: "cover" }}>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
                  <div className="card card-plain">
                    <div className="card-header">
                      <h4 className="font-weight-bolder">Sign Up</h4>
                      <p className="mb-0">Enter your email and password to register</p>
                    </div>
                    <div className="card-body">
                      <form role="form">
                      <div className="input-group input-group-outline mb-3">
                          <label className="form-label">First Name</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <label className="form-label">Last Name</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <label className="form-label">Email</label>
                          <input type="email" className="form-control" />
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <label className="form-label">Password</label>
                          <input type="password" className="form-control" />
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <label className="form-label">Phone Number</label>
                          <input type="number" className="form-control" />
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <label className="form-label">Username</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-check form-check-info text-start ps-0">
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                          <label className="form-check-label" for="flexCheckDefault">
                            I agree the <a href="javascript:;" className="text-dark font-weight-bolder">Terms and Conditions</a>
                          </label>
                        </div>
                        <div className="text-center">
                          <button type="button" className="btn btn-lg bg-gradient-secondary btn-lg w-100 mt-4 mb-0">Sign Up</button>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center pt-0 px-lg-2 px-1">
                      <p className="mb-2 text-sm mx-auto">
                        Already have an account? Or sign in with Social Accounts<br />
                        <a href="../pages/sign-in.html" className="text-primary text-gradient font-weight-bold">Sign in</a>
                      </p>
                    </div>
                  </div>
                  <footer className="footer position-absolute bottom-2 py-2 w-100">
                    <div className="container">
                      <div className="align-items-center justify-content-lg-between">
                          <div className="copyright text-center text-sm text-white text-lg-start">
                            © <script>
                              document.write(new Date().getFullYear())
                            </script>
                            made with <i className="fa fa-heart"></i> by
                            <a href="https://bellenorthedynamics.com" className="font-weight-bold" target="_blank"> Toroyteach</a>
                          </div>
                      </div>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
