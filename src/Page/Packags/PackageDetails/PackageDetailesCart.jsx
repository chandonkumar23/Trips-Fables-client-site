/* eslint-disable react/prop-types */

import BookingForm from "../../BookingForm/BookingForm";



const PackageDetailesCart = ({ packags }) => {
  const { galleryIM1, galleryIM2, galleryIM3, galleryIM4, About, day1Title, day1plan, day2Title, day2plan } = packags || {};
  return (
    <div>
      <div className="grid lg:grid-cols-2 w-3/4 gap-5 ">
        <div className="grid lg:grid-cols-2 gap-3 ">
          <img className="h-[200px] w-full shadow-2xl " src={galleryIM1} alt="" />
          <img className="h-[200px] w-full  shadow-2xl" src={galleryIM2} alt="" />
          <img className="h-[200px] w-full  shadow-2xl" src={galleryIM3} alt="" />
          <img className="h-[200px] w-full shadow-2xl " src={galleryIM4} alt="" />
        </div>
        <div>
          <h1 className="text-[#2EC1DB] font-bold">About This Toure:</h1>
          <hr /><br />
          <p>{About}</p>
        </div>
      </div>
      <div className="pt-7 mb-5">
        <h1 className="text-4xl font-bold ">
          Tour <span className="text-[#2EC1DB]">Plan:</span>
        </h1>
        <hr />
      </div>

      <div className="mb-10">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
            <span className="bg-[#2EC1DB] p-2 rounded-md text-black">Day 1:</span><span>{day1Title}</span>
          </div>
          <div className="collapse-content">
            <p>{day1plan}</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium " >
            <span className="bg-[#2EC1DB] p-2 rounded-md text-black ">Day 2:</span><span>{day2Title}</span>
          </div>
          <div className="collapse-content">
            <p>{day2plan}</p>
          </div>
        </div>
      </div>
      <h1 className="text-center text-4xl font-bold"><span className="text-[#2EC1DB] ">Booking</span> Now</h1>
      <div className="flex justify-center w-full mx-auto">

        <div>
          <BookingForm packags={packags} ></BookingForm>
        </div>
      </div>

    </div>
  );
};

export default PackageDetailesCart;