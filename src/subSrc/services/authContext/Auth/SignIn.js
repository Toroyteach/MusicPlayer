import React, { useRef, useState, useEffect } from 'react'

import { Link, useLocation, useNavigate } from 'react-router-dom';

import useAuth from '../useAuth.js';

import { useCookies } from "react-cookie";

import image from '../../../assets/users/img/new/apocalypticsunset_pe.png';

import {
  SET_USER_USERNAME,
} from '../../context/appState/stateTypes.js';

export default function SignIn() {

  const { setAuth } = useAuth();

  //Regex to validate the username
  const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

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

  //Refs to the inputs
  const userEmailRef = useRef();
  const userPasswordRef = useRef();

  const errRef = useRef();

  //Email
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  //Password
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');

  //set focus to firstname on load
  useEffect(() => {
    userEmailRef.current.focus();
  }, []);

  //check valid email with Regex
  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email])

  //check valid Password with Regex
  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
  }, [password])

  useEffect(() => {
    setErrMsg('');
  }, [email, password])
  
  //const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();

    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(password);

    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }

    //set cookier
    setCookie("user", email , {   path: "/"  });

    //add the user object to the reducer
    //stateDispatch({ type: SET_USER_USERNAME, data: email })

    //set the auth hook with the object
    setAuth({ email, password });

    //console.log(email, password);

    navigate("/dashboard");
    
    //setAuth({ email, password });

    // try {
    //   const response = await axios.post(LOGIN_URL,
    //     JSON.stringify({ user, pwd }),
    //     {
    //       headers: { 'Content-Type': 'application/json' },
    //       withCredentials: true
    //     }
    //   );
    //   console.log(JSON.stringify(response?.data));
    //   //console.log(JSON.stringify(response));
    //   const accessToken = response?.data?.accessToken;
    //   const roles = response?.data?.roles;
    //   setAuth({ user, pwd, roles, accessToken });
    //   setUser('');
    //   setPwd('');
    //   setSuccess(true);
    // } catch (err) {
    //   if (!err?.response) {
    //     setErrMsg('No Server Response');
    //   } else if (err.response?.status === 400) {
    //     setErrMsg('Missing Username or Password');
    //   } else if (err.response?.status === 401) {
    //     setErrMsg('Unauthorized');
    //   } else {
    //     setErrMsg('Login Failed');
    //   }
    //   errRef.current.focus();
    // }

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

                        <input placeholder='Email' ref={userEmailRef} value={email} onFocus={() => setEmailFocus(true)} onBlur={() => setEmailFocus(false)} onChange={(e) => setEmail(e.target.value)} aria-describedby="uidnote" autoComplete="off" type="email" className="form-control" required />
                      </div>
                      <div className="input-group input-group-outline mb-3">
                        <input placeholder='Password' ref={userPasswordRef} value='Password!@#123' onFocus={() => setPasswordFocus(true)} onBlur={() => setEmailFocus(false)} onChange={(e) => setPassword(e.target.value)} aria-describedby="uidnote" autoComplete="off" type="password" className="form-control" required />
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
