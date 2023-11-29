/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";

import Swal from "sweetalert2";
import axios from "axios";
import UserAxioxPublic from "../Hooks/UserAxioxPublic";



const Signup = () => {
const {createUser,updateUserProfile} = useContext(AuthContext);
const navigate = useNavigate();
const from = location.state?.from?.pathname || "/";
const [signError,setSignError] = useState('');
const axiosPublic = UserAxioxPublic();
    const handleSignup = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name,email,password,photo);
        const userInfo = {name,email,password,photo}
        if(password.length < 6){
          setSignError("password must be 6 characters")
          return;
        }
        else if (!/[A-Z]/.test(password)){
          setSignError("Don't have a capital character")
          return
      }
      else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)){
        setSignError("Don't have a special character")
        return
      }

      setSignError('')
      createUser(email,password)
      .then(result =>{
        updateUserProfile(name,photo)
        .then(()=>{
          if(createUser){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
          axiosPublic.post('/users',userInfo).then((res)=>{
             
          })
          navigate(from,{replace:true});

          }
        })
      })

    }
    return (
        <div className="">
        <h1 className="text-3xl font-bold text-[#2EC1DB] p-2 ">
          
          Welcome to Trips Fables! Please Sign Up.
        </h1>
        <div className="hero  bg-base-200">
          <div className="hero-content lg:h-[600px] flex-col lg:flex-row-reverse">
            <div className=" w-full max-w-sm bg-base-100 ">
              <form onSubmit={handleSignup} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="border-2 p-2"
                    required
                    name="name"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your E-mail"
                    className="border-2 p-2"
                    required
                    name="email"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="border-2 p-2"
                    required
                    name="password"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Upload Picture</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo"
                    className="border-2 p-2"
                    required
                    name="photo"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="p-2 border-2 bg-[#2EC1DB] text-black shadow-2xl">
                    Sign Up
                  </button>
                </div>
  
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Already have an account?{" "}
                    <span className="text-[#205c67] ">
                      <Link to={"/login"}>Login</Link>
                    </span>
                  </a>
                </label>
                {
            signError && <p className="text-red-500">{signError}</p>
            }
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Signup;