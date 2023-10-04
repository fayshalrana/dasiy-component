import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';
import { UserContext } from '../Provider/UserProvider';





const Register = () => {
  //recive registerUser form user-contaxt
  const {registerUser} = useContext(UserContext)

  //Creacte user & password validation
  const handleRegister = event =>{
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password. value

    if(!/(?=.*?[A-Z])/.test(password)){
      toast.error("At least one uppercase");
      console.log(password)
      return;
    }else if(!/(?=.*?[0-9])/.test(password)){
      toast.error("At least one digit");
      return;
    }else if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
      toast.error("At least one special character");
      return;
    }else if(!/(?=^.{8,}$)/.test(password)){
      toast.error("Minimum six in length");
      return;
    }

    registerUser(email, password)
    .then(result=>{
      const user = result.user;
      toast.success(`Hi ${name}. Your Email Register Succesfuly`);
    })
    .catch(error =>{
      const errroMessage = error.message;
      toast.error(errroMessage);
    })
  }

  //show password
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  })
  const handleShowPassword = () =>{
    setValues({...values, showPassword: !values.showPassword})
  }


  return (
   <>
   <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
  <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      
    </div>
  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type={values.showPassword ? "text" : "password"} placeholder="Password" className="input input-bordered" required />
          <label className="label flex">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            <a onClick={handleShowPassword} href="#" className="label-text-alt link link-hover">Show Password</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <Link to="/login">
      <button type='submite' className="btn btn-active btn-link">Already have an account ? Login</button>
      </Link>
    </div>
    
  </div>
</div>
   </>
  )
}

export default Register
