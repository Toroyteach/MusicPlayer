import React, { useRef, useState, useEffect } from 'react'

import { Link } from 'react-router-dom';

import backgroundImage from '../../../assets/users/img/illustrations/illustration-signup.jpg';

export default function SignUp() {

  //Regex to validate the username
  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const PHONE_REGEX = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  //Refs to the inputs
  const userFNameRef = useRef();
  const userLNameRef = useRef();
  const userEmailRef = useRef();
  const userPasswordRef = useRef();
  const userPasswordConfirmRef = useRef();
  const userPhoneNumberRef = useRef();
  const usernameRef = useRef();

  const errRef = useRef();

  //firstname
  const [firstname, setFirstname] = useState('');
  const [validFirstname, setValidFirstname] = useState(false);
  const [firstnameFocus, setFirstnameFocus] = useState(false);

  //Lastname
  const [lastname, setLastname] = useState('');
  const [validLastname, setValidLastname] = useState(false);
  const [lastnameFocus, setLastnameFocus] = useState(false);

  //Email
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  //Password
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  //ConfirmPassword
  const [cpassword, setCPassword] = useState('');
  const [validCPassword, setValidCPassword] = useState(false);
  const [cpasswordFocus, setCPasswordFocus] = useState(false);

  //PhoneNumber
  const [phoneNumber, setPhoneNumber] = useState('');
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);
  const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);

  //username
  const [username, setUsername] = useState('');
  const [validUsername, setValidUsername] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  //error messages notifiation
  const [errMsg, setErrMsg] = useState('');

  //set focus to firstname on load
  useEffect(() => {
    userFNameRef.current.focus();
  }, []);

  //check valid firstname with Regex
  useEffect(() => {
    setValidFirstname(USER_REGEX.test(firstname));
  }, [firstname])

  //check valid lastname with Regex
  useEffect(() => {
    setValidLastname(USER_REGEX.test(lastname));
  }, [lastname])

  //check valid Email with Regex
  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email])

  //check valid password
  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
    setValidCPassword(password === cpassword);
  }, [password, cpassword])

  //check valid PhoneNumber with Regex
  useEffect(() => {
    setValidPhoneNumber(PHONE_REGEX.test(phoneNumber));
  }, [phoneNumber])

  //check valid Username with Regex
  useEffect(() => {
    setValidUsername(USER_REGEX.test(username));
  }, [username])

  useEffect(() => {
    setErrMsg('');
  }, [firstname, lastname, password, username, phoneNumber, email, cpassword])

  //handle signup on click
  const handleSubmit = (e) => {
    e.preventDefault();

    // if button enabled with JS hack
    const v1 = USER_REGEX.test(firstname);
    const v2 = USER_REGEX.test(lastname);
    const v3 = EMAIL_REGEX.test(email);
    const v4 = PWD_REGEX.test(password);
    const v5 = PHONE_REGEX.test(phoneNumber);
    const v6 = USER_REGEX.test(username);

    if (!v1 || !v2 || !v3 || !v4 || !v5 || !v6) {
      setErrMsg("Invalid Entry");
      console.log('faild')
      return;
    }

    console.log('success')

    // try {
    //   const response = await axios.post(REGISTER_URL,
    //     JSON.stringify({ user, pwd }),
    //     {
    //       headers: { 'Content-Type': 'application/json' },
    //       withCredentials: true
    //     }
    //   );
    //   console.log(response?.data);
    //   console.log(response?.accessToken);
    //   console.log(JSON.stringify(response))
    //   setSuccess(true);
    //   //clear state and controlled inputs
    //   //need value attrib on inputs for this
    //   setUser('');
    //   setPwd('');
    //   setMatchPwd('');
    // } catch (err) {
    //   if (!err?.response) {
    //     setErrMsg('No Server Response');
    //   } else if (err.response?.status === 409) {
    //     setErrMsg('Username Taken');
    //   } else {
    //     setErrMsg('Registration Failed')
    //   }
    //   errRef.current.focus();
    // }

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
                    <div className="card-body" style={{ backgroundColor: "#fff" }}>
                      <form role="form" onSubmit={handleSubmit}>
                        <div className="input-group input-group-outline mb-3">
                          <input placeholder='Firstname' id='firstname' aria-invalid={validFirstname ? "false" : "true"} aria-describedby="uidnote" ref={userFNameRef} autoComplete="off" value={firstname} onChange={(e) => setFirstname(e.target.value)} onFocus={() => setFirstnameFocus(true)} onBlur={() => setFirstnameFocus(false)} type="text" className="form-control" required />
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <input placeholder='Lastname' id='lastname' aria-invalid={validLastname ? "false" : "true"} aria-describedby="uidnote" ref={userLNameRef} autoComplete="off" value={lastname} onChange={(e) => setLastname(e.target.value)} onFocus={() => setLastnameFocus(true)} onBlur={() => setLastnameFocus(false)} type="text" className="form-control" required />
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <input placeholder='Email' id='email' aria-invalid={validEmail ? "false" : "true"} aria-describedby="uidnote" ref={userEmailRef} autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} onFocus={() => setEmailFocus(true)} onBlur={() => setEmailFocus(false)} type="email" className="form-control" required />
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <input placeholder='Password' id='password' aria-invalid={validPassword ? "false" : "true"} aria-describedby="uidnote" ref={userPasswordRef} autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} onFocus={() => setPasswordFocus(true)} onBlur={() => setPasswordFocus(false)} type="password" className="form-control" required />
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <input placeholder='Confirm Password' id='confirm-password' aria-invalid={validCPassword ? "false" : "true"} aria-describedby="uidnote" ref={userPasswordConfirmRef} autoComplete="off" value={cpassword} onChange={(e) => setCPassword(e.target.value)} onFocus={() => setCPasswordFocus(true)} onBlur={() => setCPasswordFocus(false)} type="password" className="form-control" required />
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <input placeholder='Phone' id='phonenumber' aria-invalid={validPhoneNumber ? "false" : "true"} aria-describedby="uidnote" ref={userPhoneNumberRef} autoComplete="off" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} onFocus={() => setPhoneNumberFocus(true)} onBlur={() => setPhoneNumberFocus(false)} type="number" className="form-control" required />
                        </div>
                        <div className="input-group input-group-outline mb-3">
                          <input placeholder='username' id='username' aria-invalid={validUsername ? "false" : "true"} aria-describedby="uidnote" ref={usernameRef} autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)} onFocus={() => setUsernameFocus(true)} onBlur={() => setUsernameFocus(false)} type="text" className="form-control" required />
                        </div>
                        <div className="form-check form-check-info text-start ps-0">
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" for="flexCheckDefault">
                            I agree the <a href="/#" className="text-dark font-weight-bolder">Terms and Conditions</a>
                          </label>
                        </div>
                        <div className="text-center">
                          <button type="button" className="btn btn-lg bg-gradient-secondary btn-lg w-100 mt-4 mb-0" disabled={!validFirstname || !validLastname || !validEmail || !validPassword || !validPhoneNumber || !validUsername || !validCPassword ? true : false}>Sign Up</button>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center pt-0 px-lg-2 px-1">
                      <p className="mb-2 text-md text-white mx-auto">
                        Already have an account? Or sign in with Social Accounts<br />
                        <Link to="/login">
                          <a className="text-primary text-gradient font-weight-bold">Sign in</a>
                        </Link>
                      </p>
                    </div>
                  </div>
                  <footer className="footer position-absolute bottom-2 py-2 w-100">
                    <div className="container">
                      <div className="align-items-center justify-content-lg-between">
                        <div className="copyright text-center text-sm text-white text-lg-start">
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
