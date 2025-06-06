import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";
import BookingCart from "./BookingCart";

const MyBooking = () => {

    const {user} = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    const BookingData = `https://asssignment-12-serverrr.vercel.app/bookings/${user?.email}`
    useEffect(()=>{
      fetch(BookingData)
      .then(res =>res.json())
      .then(data =>setBooking(data))
    },[BookingData])
    return (
        <div>
           {
           booking?.map(book =><BookingCart key={book._id}book={book}></BookingCart>)
           }
         
       
        </div>
    );
};

export default MyBooking;