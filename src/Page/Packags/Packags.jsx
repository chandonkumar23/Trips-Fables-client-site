import { useEffect, useState } from "react";
import PackageCart from "./PackageCart";
import { Link } from "react-router-dom";

const Packags = () => {
  const [packags, setPackag] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all")
      .then((res) => res.json())
      .then((data) => setPackag(data));
  }, []);

  
  return (
    <div className="grid lg:grid-cols-3">
      {packags.slice(0, 3).map((packag) => (
        <PackageCart key={packag._id} packag={packag}></PackageCart>
      ))}
      <button className="p-2 border-2 mb-3 bg-[#2EC1DB] shadow-2xl flex justify-center mx-auto text-center text-black">
       <Link to={'/allpacakge'}>All Package</Link>
      </button>
    </div>
  );
};

export default Packags;
