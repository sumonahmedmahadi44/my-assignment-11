import React, { useContext, useState } from 'react';
import {  FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { Link,  useNavigate } from 'react-router-dom';
import SetTitle from '../../Hooks/SetTitle';

const Registration = () => {
  SetTitle('registration')
    const [regError,setRegError] = useState('');
    const { createUser, loggedOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleRegister = (event) => {
      event.preventDefault()
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const photo = form.photo.value;
      const password = form.password.value;
      console.log(name, email, photo, password);
      createUser(email, password)
          .then(result => {
              const loggedUser = result.user;
              console.log(loggedUser);
              updateUserData(result.user, photo,name)
              loggedOut()
              navigate('/login')
              form.reset()
              setRegError('')

          })
          .catch(error => {
              console.log(error);
              setRegError(error.message)
          })
  }


  const updateUserData = (user, photo,name) => {
    updateProfile(user, {
        photoURL: photo,
        displayName : name
    })
        .then(() => {
            console.log('user photo update');
        })
        .catch(error => {
            console.log(error);
        })
}
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Registration now!</h1>
      <p className="py-6">Kids can interact with toy cars, trucks, etc. through spinning their wheels, watching them move in a variety of directions, or hearing the sounds they make</p>
    </div>
    <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister}>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' required  className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" name='photo' required className="input input-bordered" />
        </div>
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
         
        </div>
        <p className='text-red-500 mb-5'>{regError}</p>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Registration</button>
        </div>
        <div>
                          <p className='text-center text-xl font-semibold '><small >Already have an account? <Link to='/login'><button className='btn btn-outline'>Login!!</button></Link></small></p>
                      </div>
      </div>
      </form>
      <Link to ='/'><button className="btn btn-outline btn-info w-full mt-5"> <FaGoogle className="me-2"></FaGoogle>  Google</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Registration;