import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { UserContext } from '../Provider/UserProvider';
const Login = () => {
  //recive login user form user-context
  const { loginUser, googleLogin } = useContext(UserContext);
  //login user function
  const handleLoign = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    loginUser(email, password)
      .then(result => {
        const user = result.user;
        toast.success("You have login Successfully")
      })
      .catch(error => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      })

  }
  // password function
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  })
  const handleShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const googleLogin = result.user;
      })
      .catch(error => {
        const errorMessage = error.message;
      })
  }
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLoign} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type={values.showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" required />
                <label className="label flex">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  <a onClick={handleShowPassword} href="#" className="label-text-alt link link-hover">Show Password</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <button onClick={handleGoogleLogin} className="btn btn-active hover:bg-green-400 hover:text-white btn-neutral">Googole</button>
            </form>
            <Link to="/register">
              <button type='submite' className="btn btn-active btn-link">New to our webiste ? Register</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login
