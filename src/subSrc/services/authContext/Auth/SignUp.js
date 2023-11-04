import React, { useRef, useState, useEffect } from 'react'

import { Link, useNavigate } from 'react-router-dom';

import useQuery from '../../api/base/useQuery.js';

import apiClient from '../../api/base/apiClient.js';

import backgroundImage from '../../../assets/users/img/illustrations/illustration-signup.jpg';

//custom hooks for form validation with regular expressions
import useFirstnameValidation from '../../hooks/formValidation/useFirstnameValidation';
import useLastnameValidation from '../../hooks/formValidation/useLastnameValidation';
import useEmailValidation from '../../hooks/formValidation/useEmailValidation';
import usePasswordValidation from '../../hooks/formValidation/usePasswordValidation';
import useNumberValidation from '../../hooks/formValidation/useNumberValidation';
import useUsernameValidation from '../../hooks/formValidation/useUsernameValidation';

//import captcher from google to help deter robots
import ReCAPTCHA from 'react-google-recaptcha'

import { useCookies } from "react-cookie";

export default function SignUp() {

  const errRef = useRef();

  const [cookies, setCookie] = useCookies(["userToken"]);

  const navigate = useNavigate();

  //firstname
  const { firstname, setFirstname, validFirstname } = useFirstnameValidation();

  //Lastname
  const { lastname, setLastname, validLastname } = useLastnameValidation();

  //Email
  const { email, setEmail, validEmail } = useEmailValidation();

  //Password
  const { password, setPassword, validPassword } = usePasswordValidation();

  //ConfirmPassword
  //const [cpassword, setCPassword, isValidCPassword] = useCustomPasswordValidation();

  //PhoneNumber
  const { number, setNumber, validNumber } = useNumberValidation();

  //username
  const { username, setUsername, validUsername } = useUsernameValidation();

  //error messages notifiation
  const [errMsg, setErrMsg] = useState('');

  //Handle get data
  const [requestData, setRequestData] = useState({ /* your request data here */ });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  //handle signup on click
  const handleSubmit = (e) => {

    e.preventDefault();

    if (validFirstname && validLastname && validEmail && validPassword && validUsername && validNumber) {

      setLoading(true)

      setRequestData({
        firstname,
        lastname,
        email,
        password,
        username,
        phone: number,
        role: 'User',
      })

      apiClient.post('/auth/register', requestData)
        .then(response => {

          setLoading(false)

          navigate('/login', { replace: true });

        })
        .catch(error => {
          setLoading(false)
          setError('Error creating account please try again later')
        });

    }
  }

  //captcher function
  const capchaKey = '6LckD6MhAAAAAGQ4akjQtUX0uW7cDzs6_Hu4ED1P' //get this from the backend
  const [isRobot, setIsRobot] = useState(true);
  const onCaptchaChange = (value) => {
    //console.log('Captcha value:', value)
    setIsRobot(false)
  }

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
                      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    </div>

                    {error &&
                      <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        {error}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div>}

                    <div className="card-body" style={{ backgroundColor: "#fff" }}>
                      <form role="form" onSubmit={handleSubmit}>
                        <div className="input-group input-group-outline mb-2">
                          <input placeholder='Firstname' id='firstname' aria-invalid={validFirstname ? "false" : "true"} aria-describedby="uidnote" autoComplete="off" onChange={(e) => setFirstname(e.target.value)} type="text" className="form-control" required />
                        </div>
                        <div className="input-group input-group-outline mb-2">
                          <input placeholder='Lastname' id='lastname' aria-invalid={validLastname ? "false" : "true"} aria-describedby="uidnote" autoComplete="off" onChange={(e) => setLastname(e.target.value)} type="text" className="form-control" required />
                        </div>
                        <div className="input-group input-group-outline mb-2">
                          <input placeholder='Email' id='email' aria-invalid={validEmail ? "false" : "true"} aria-describedby="uidnote" autoComplete="off" onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" required />
                        </div>
                        <div className="input-group input-group-outline mb-2">
                          <input placeholder='Password' id='password' aria-invalid={validPassword ? "false" : "true"} aria-describedby="uidnote" autoComplete="off" onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" required />
                        </div>
                        <div className="input-group input-group-outline mb-2">
                          <input placeholder='Confirm Password' id='confirm-password' aria-invalid={validPassword ? "false" : "true"} aria-describedby="uidnote" autoComplete="off" type="password" className="form-control" required />
                        </div>
                        <div className="input-group input-group-outline mb-2">
                          <input placeholder='Number' id='phonenumber' aria-invalid={validNumber ? "false" : "true"} aria-describedby="uidnote" autoComplete="off" onChange={(e) => setNumber(e.target.value)} type="number" className="form-control" required />
                        </div>
                        <div className="input-group input-group-outline mb-2">
                          <input placeholder='username' id='username' aria-invalid={validUsername ? "false" : "true"} aria-describedby="uidnote" autoComplete="off" onChange={(e) => setUsername(e.target.value)} type="text" className="form-control" required />
                        </div>
                        <div className="form-check form-check-info text-start ps-0">
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" for="flexCheckDefault">
                            I agree the <a href="/#" className="text-dark font-weight-bolder">Terms and Conditions</a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center">
                          <ReCAPTCHA sitekey={capchaKey} onChange={onCaptchaChange} />
                        </div>
                        <div className="text-center">
                          <button type="submit" className="btn btn-lg bg-gradient-success btn-lg w-100 mt-4 mb-0" disabled={!validFirstname || !validLastname || !validEmail || !validPassword || !validNumber || !validUsername || !isRobot ? true : false}>Sign Up</button>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center pt-0 px-lg-2 px-1">
                      {loading && <div class="spinner-grow text-center" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>}
                      <p className="mb-2 text-md mx-auto">
                        Already have an account? Or sign in with Social Accounts<br />
                        <Link to="/login">
                          <a className="text-primary text-gradient font-weight-bold">Here</a>
                        </Link>
                      </p>
                    </div>
                  </div>
                  <footer className="footer position-absolute bottom-2 py-2 w-100">
                    <div className="container">
                      <div className="align-items-center justify-content-lg-between">
                        <div className="copyright text-center text-sm text-lg-start">
                          ©
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
