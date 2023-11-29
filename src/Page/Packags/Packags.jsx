import { useEffect, useState } from "react";
import PackageCart from "./PackageCart";

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
      <button className="p-2 border-2 mb-3 bg-[#2EC1DB] shadow-2xl flex justify-center mx-auto text-center">
        All Packag
      </button>
    </div>
  );
};

export default Packags;
