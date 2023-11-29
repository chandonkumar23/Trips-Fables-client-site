import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";
import BookingCart from "./BookingCart";

const MyBooking = () => {

    const {user} = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    const BookingData = `http://localhost:5000/bookings?email?=${user.email}`
    useEffect(()=>{
      fetch(BookingData)
      .then(res =>res.json())
      .then(data =>setBooking(data))
    },[])
    return (
        <div>
           {
           booking?.map(book =><BookingCart key={book._id}book={book}></BookingCart>)
           }
       
        </div>
    );
};

export default MyBooking;