import { useEffect, useState } from "react";
import TouristStoryCart from "./TouristStoryCart";

const TouristStory = () => {
  const [storys, setStory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/story")
      .then((res) => res.json())
      .then((data) => setStory(data));
  }, []);
  
  return (
    <div className="mb-36">
    <h2 className="text-center font-bold text-xl md:text-3xl lg:text-5xl">
    Tourist<span className="text-[#2EC1DB]"> Story</span></h2>

  <p>{storys.length}</p>
  {
    storys?.map(story =><TouristStoryCart key={story._id} story={story}></TouristStoryCart>)
  }
      
    </div>
  );
};

export default TouristStory;
