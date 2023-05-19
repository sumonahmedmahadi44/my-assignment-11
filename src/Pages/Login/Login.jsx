import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const [loginError,setLoginError] = useState('')
    const {user,loginUser,signInWithGoogle,signInWithGithub} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
  
    const from = location.state?.from?.pathname || '/';
  
   
  
    const handleGoogleBtn=()=> {
      signInWithGoogle()
      .then(result => {
        const loggedUser = result.user;
      })
      .catch(error => console.error(error));
      
      
    }
  
    
  
    function handleSubmit(event) {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email,password)
     
      loginUser(email,password)
      .then(result => {
        const loggedUser = result.user;
        navigate(from,{replace:true});
        setLoginError('')
      })
      .catch (error => {
        console.log(error);
        setLoginError(error.message)
      });
      form.reset();
      
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Kids can interact with toy cars, trucks, etc. through spinning their wheels, watching them move in a variety of directions, or hearing the sounds they make</p>
    </div>
    <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit}>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" required name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" required name='password' className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div>
            <h1 className='text-center text-xl font-semibold '>Don't Have Account ? <Link to='/register'><button className='btn btn-outline'>Register!!</button></Link></h1>
        </div>
      </div>
      </form>
      <Link to ='/'><button onClick={handleGoogleBtn}  className="btn btn-outline btn-info w-full mt-5"> <FaGoogle className="me-2"></FaGoogle>  Google</button></Link>
    </div>
  </div>
</div>
    );
};

export default Login;