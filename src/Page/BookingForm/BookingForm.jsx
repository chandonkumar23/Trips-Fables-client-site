/* eslint-disable react/prop-types */


import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UseAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import userAxioxSecure from "../Hooks/UserAxioxSecure";




const BookingForm = ({ packags }) => {
  const { price, tripTitle } = packags || {};


  const [startDate, setStartDate] = useState(new Date());
  const { user } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = userAxioxSecure();


  const handleBookin = event => {
    if (user && user?.email) {

      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const image = form.email.value;
      const date = form.date.value;
      const price = form.price.value;
      const guide = form.guide.value;
      const allData = { name, email, image, date, price, guide, tripTitle };

      axiosSecure.post('/bookings', allData)
        .then(res => {
          console.log(res.data)
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Package Booked",
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
    }
    else {
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
          navigate('/login', { state: { form: location } })
        }
      });
    }



  }



  return (
    <div>
    <div className="w-full max-w-4xl mx-auto p-4 bg-base-100">
  <div className="flex justify-center">
    <form onSubmit={handleBookin} className="card-body w-full">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Side Inputs */}
        <div className="flex-1 space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="border-2 p-2 w-full"
              required
              name="name"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">E-mail</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your E-mail"
              className="border-2 p-2 w-full"
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
              placeholder="Photo URL"
              className="border-2 p-2 w-full"
              required
              name="image"
            />
          </div>
        </div>

        {/* Right Side Inputs */}
        <div className="flex-1 space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <div className="border-2 p-2 w-full">
              <DatePicker
                name="date"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="w-full"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              className="border-2 p-2 w-full"
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
              type="text"
              placeholder="Guide"
              className="border-2 p-2 w-full"
              required
              name="guide"
            />
          </div>
        </div>
      </div>

      <div className="form-control mt-6">
        <button className="p-3 border-2 bg-[#2EC1DB] text-black shadow-2xl w-full md:w-1/2 mx-auto">
          Book Now
        </button>
      </div>

      <label className="label">
        <a href="#" className="label-text-alt link link-hover text-[#205c67]">
          {/* Optional footer link text */}
        </a>
      </label>
    </form>
  </div>
</div>


    </div>
  );
};

export default BookingForm;