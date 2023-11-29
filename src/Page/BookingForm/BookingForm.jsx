/* eslint-disable react/prop-types */


import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UseAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import userAxioxSecure from "../Hooks/UserAxioxSecure";




const BookingForm = ({packags}) => {
  const { price,tripTitle} = packags || {};

   
  const [startDate, setStartDate] = useState(new Date());
  const {user} =UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = userAxioxSecure();


  const handleBookin = event =>{
    if(user && user.email){

      event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.email.value;
    const date = form.date.value;
    const price = form.price.value;
    const guide = form.guide.value;
    const allData = {name,email,image,date,price,guide,tripTitle};
   
    axiosSecure.post('/bookings',allData)
    .then (res =>{
      console.log(res.data)
      if(res.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
       
    }

   else{
    Swal.fire({
      title: "You are not Logged in",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, login!"
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login',{state:{form:location}})
      }
    });
    }
    


  }
   
   
  
    return (
        <div>
             <div className=" w-full max-w-sm bg-base-100">
            <div className="flex">
            <form onSubmit={handleBookin} className="card-body">
            <div className="flex gap-3">
        
           <div>
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
                  <span className="label-text">E-mail</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your E-mail"
                  className="border-2 p-2"
                  required
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="border-2 p-2"
                  required
                  name="image"
                />
              </div>
              </div>
        
             <div>
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
              <div className="border-2 p-2">  <DatePicker name="date" selected={startDate} onChange={(date) => setStartDate(date)} /></div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  placeholder=""
                  className="border-2 p-2"
                  required
                 defaultValue={price}
                  readOnly
                  name="price"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Guide Name</span>
                </label>
                <input
                  type=""
                  placeholder="Enter Your Name"
                  className="border-2 p-2"
                  required
                  name="guide"
                />
              </div>
             </div>
            </div>
              <div className="form-control mt-6">
                <button className="p-2 border-2 bg-[#2EC1DB] shadow-2xl">
                  Book Now
                </button>
              </div>

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  <span className="text-[#205c67]">
                  </span>
                </a>
              </label>
            </form>
            </div>
          </div>
        </div>
    );
};

export default BookingForm;