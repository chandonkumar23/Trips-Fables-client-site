import { useEffect, useState } from "react";
import TouristStoryCart from "./TouristStoryCart";
import { Link } from "react-router-dom";

const TouristStory = () => {
  const [storys, setStory] = useState([]);
  useEffect(() => {
    fetch("https://asssignment-12-serverrr.vercel.app/story")
      .then((res) => res.json())
      .then((data) => setStory(data));
  }, []);

  return (
    <div className="mb-36">
     <div className="mb-24">
     <h2 className="text-center font-bold text-xl md:text-3xl lg:text-5xl">
        Tourist<span className="text-[#2EC1DB]"> Story</span>
      </h2>
     </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-7">
        {storys?.slice(0,4).map((storye) => (
          <TouristStoryCart key={storye._id} storye={storye}></TouristStoryCart>
        ))}
      </div>
      <button className="p-2 border-2 mb-3 bg-[#2EC1DB] shadow-2xl flex justify-center mx-auto text-center text-black">
       <Link to={'/allstory'}>All Story</Link>
      </button>
    </div>

  );
};

export default TouristStory;
