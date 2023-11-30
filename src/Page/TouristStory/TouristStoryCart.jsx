/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TouristStoryCart = ({ storye }) => {
  const {_id, tourType, date, name, photo, story } = storye || {};
  const sort = story.slice(0, 100);

  return (
    <div className="border-2 rounded-2xl p-4 shadow-2xl bg-slate-800 text-slate-500">
      <Link to={`/story/${_id}`}>
      <div className=" flex items-center">
        <div>
          <h2 className="text-[#2EC1DB] font-bold">{tourType}</h2>
          <p>{sort}...</p>
          <div className="flex items-center gap-2">
            <img
              className="h-[70px] w-[70px] rounded-full"
              src={photo}
              alt=""
            />
            <p>{name}</p>
          </div>
          <p className="text-center text-slate-400">Date: {date}</p>
        </div>
      </div></Link>
    </div>
  );
};

export default TouristStoryCart;
