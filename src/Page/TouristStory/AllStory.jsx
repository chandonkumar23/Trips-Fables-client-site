import { useEffect, useState } from "react";

import TouristStoryCart from "./TouristStoryCart";

const AllStory = () => {

    const [storys, setStory] = useState([]);
  useEffect(() => {
    fetch("https://asssignment-12-serverrr.vercel.app/story")
      .then((res) => res.json())
      .then((data) => setStory(data));
  }, []);

    return (
        <div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-7">
        {storys?.map((storye) => (
          <TouristStoryCart key={storye._id} storye={storye}></TouristStoryCart>
        ))}
      </div>
        </div>
    );
};

export default AllStory;