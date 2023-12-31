import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";
import MywishCart from "./MywishCart";

const MyWishlist = () => {
    const {user} = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    const BookingData = `https://asssignment-12-serverrr.vercel.app/whishlist/${user?.email}`
    useEffect(()=>{
      fetch(BookingData)
      .then(res =>res.json())
      .then(data =>setBooking(data))
    },[BookingData])
    return (
        <div className="grid lg:grid-cols-3">
          {
           booking?.map(book =><MywishCart key={book._id}book={book}></MywishCart>)
          }
        </div>
    );
};

export default MyWishlist;