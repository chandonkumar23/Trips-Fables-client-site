/* eslint-disable react/prop-types */
const BookingCart = ({book}) => {
    const {price,date,tripTitle}=book;
    console.log(book)
    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Package</th>
        <th>Gude Name</th>
        <th>Tour Date</th>
        <th>Tour Price</th>
        <th>status</th>
        <th>Payment</th>
      
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div>
             <h2>{tripTitle}</h2>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
         
        </td>
        <td>{date}</td>
        <th>
         <h2>{price}.TK</h2>
        </th>
        <th>
        <p>pending</p>
        </th>
        <th>
        <button className="bg-[#2EC1DB] px-2 p-1 text-black">Pay</button>
        </th>
      </tr>
      
      
      
    </tbody>
    {/* foot */}
   
    
  </table>
</div>
        </div>
    );
};

export default BookingCart;