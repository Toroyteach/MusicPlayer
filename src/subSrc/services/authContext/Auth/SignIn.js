import React, { useRef, useState, useEffect } from 'react'

import { Link, useLocation, useNavigate } from 'react-router-dom';

import useAuth from '../useAuth.js';

import { useCookies } from "react-cookie";

import image from '../../../assets/users/img/new/apocalypticsunset_pe.png';

import {
  SET_USER_USERNAME,
} from '../../context/appState/stateTypes.js';

//custom input validation with Regular Expressions
import useEmailValidation from '../../hooks/formValidation/useEmailValidation';
import usePasswordValidation from '../../hooks/formValidation/usePasswordValidation';

export default function SignIn() {

  const { setAuth } = useAuth();

  //global states
    // Global State
    // const {
    //   stateDispatch,
    // } = useContext(appContext)

  //cookie
  const [cookies, setCookie] = useCookies(["user"]);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const errRef = useRef();

  //Email
  const { email, setEmail, validEmail } = useEmailValidation();

  //Password
  const { password, setPassword, validPassword } = usePasswordValidation();

  const [errMsg, setErrMsg] = useState('');
  
  //const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, validEmail);
    console.log(password, validPassword);

    //set cookier
    setCookie("user", email , {   path: "/"  });

    //add the user object to the reducer
    //stateDispatch({ type: SET_USER_USERNAME, data: email })

    //set the auth hook with the object
    setAuth({ email, password });

    //console.log(email, password);

    //navigate("/dashboard");

  }

  return (
    <>
      <main className="main-content  mt-0">
        <div className="page-header align-items-start min-vh-100" style={{ backgroundImage: 'url(' + image + ')' }}>
          <span className="mask bg-gradient-dark opacity-6"></span>
          <div className="container my-auto">
            <div className="row">
              <div className="col-lg-4 col-md-8 col-12 mx-auto">
                <div className="card z-index-0 fadeIn3 fadeInBottom">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-gradient-secondary shadow-primary border-radius-lg py-3 pe-1">
                      <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">Sign in</h4>
                      <div className="row mt-3">
                        <div className="col-2 text-center ms-auto">
                          <a className="btn btn-link px-3" href="/#">
                            <i className="fa fa-facebook text-white text-lg"></i>
                          </a>
                        </div>
                        <div className="col-2 text-center px-1">
                          <a className="btn btn-link px-3" href="/#">
                            <i className="fa fa-github text-white text-lg"></i>
                          </a>
                        </div>
                        <div className="col-2 text-center me-auto">
                          <a className="btn btn-link px-3" href="/#">
                            <i className="fa fa-google text-white text-lg"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <form role="form" className="text-start" onSubmit={handleSubmit}>
                      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                      <div className="input-group input-group-outline my-3">

                        <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} aria-describedby="uidnote" autoComplete="off" type="email" className="form-control" required />
                      </div>
                      <div className="input-group input-group-outline mb-3">
                        <input placeholder='Password' onChange={(e) => setPassword(e.target.value)} aria-describedby="uidnote" autoComplete="off" type="password" className="form-control" required />
                      </div>
                      <div className="form-check form-switch d-flex align-items-center mb-3">
                        <input className="form-check-input" type="checkbox" id="rememberMe" checked />
                        <label className="form-check-label mb-0 ms-3" for="rememberMe">Remember me</label>
                      </div>
                      <div className="text-center">
                        <button type="submit" disabled={!validEmail || !validPassword ? true : false} className="btn bg-gradient-secondary w-100 my-4 mb-2">Sign in</button>
                      </div>
                      <p className="mt-4 text-sm text-center">
                        Don't have an account?
                        <Link to="/signup">
                          <a className="text-primary text-gradient font-weight-bold">Sign up</a>
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer position-absolute bottom-2 py-2 w-100">
            <div className="container">
              <div className="align-items-center justify-content-lg-between">
                <div className="col-12 col-md-12 my-auto">
                  <div className="copyright text-center text-sm text-white text-lg-start">
                    ©
                    made with <i className="fa fa-heart"></i> by
                    <a href="https://bellenorthedynamics.com" className="font-weight-bold" target="_blank"> Toroyteach </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  )
}
