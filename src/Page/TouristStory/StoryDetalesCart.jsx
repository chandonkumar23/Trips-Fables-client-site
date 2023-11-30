/* eslint-disable react/prop-types */


const StoryDetalesCart = ({data}) => {
    const { tourType, date, name, photo, story } = data || {};
    

    return (
        <div className="bg-slate-800">
          <div className="border-2 p-5 rounded-md">
          <div className="">
          <p className=" text-slate-400">Date: {date}</p>
          <h2 className="text-[#2EC1DB] text-xl font-bold">{tourType}</h2>
         <p>{story}</p>
            </div>
            <div className="flex items-center gap-2">
            <img
              className="h-[70px] w-[70px] rounded-full"
              src={photo}
              alt=""
            />
            <p>{name}</p>
          </div>
          </div>
        </div>
    );
};

export default StoryDetalesCart;