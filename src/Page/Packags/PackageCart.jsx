/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Authprovider/Authprovider";

const PackageCart = ({ packag }) => {
  const {user} = useContext(AuthContext)
  const email = user?.email
  const navigate = useNavigate();
  const {_id, image, price, tripTitle,tourType } = packag ||{};
  const alldata = {image,price,tripTitle,tourType,email}
  const handleAdd = () =>{
    fetch('https://asssignment-12-serverrr.vercel.app/whishlist',{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(alldata),

    })
    .then(res =>res.json())
    .then(data =>{
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Added to wishlist",
          showConfirmButton: false,
          timer: 1500
        });
      }
      else{
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
            navigate('/login',{state:{form:location}})
          }
        });
        }
    })
    
  }

  return (
    <div>
      <div className=" w-96 bg-base-100 border-2 shadow-sm mb-10">
        <figure>
          <img className="h-[200px] w-full" src={image} alt="" />
          <div className="flex items-center">
            <button onClick={handleAdd}><FaRegHeart></FaRegHeart></button>
            </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{tripTitle}</h2>
          <p>{tourType}</p>
          <p><span className="font-bold">price:</span> {price}.TK</p>
          <div className="card-actions justify-end">
            <button className="p-2 border-2 bg-[#2EC1DB] shadow-2xl text-black"><Link to={`/detailes/${_id}`}>View Packag</Link></button>
          </div>
        </div>
        
      </div>
     
    </div>
    
  );
};

export default PackageCart;
