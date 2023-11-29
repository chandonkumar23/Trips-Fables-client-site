import { useEffect, useState } from "react";
import PackageCart from "../Packags/PackageCart";

const Allpackage = () => {
  const [packags, setPackag] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all")
      .then((res) => res.json())
      .then((data) => setPackag(data));
  }, []);

  return (
    <div className="grid lg:grid-cols-3">
      {packags?.map((packag) => (
        <PackageCart key={packag._id} packag={packag}></PackageCart>
      ))}
    </div>
  );
};

export default Allpackage;
