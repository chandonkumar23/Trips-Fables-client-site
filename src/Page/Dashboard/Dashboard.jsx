
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {

 const [isAdmin] = useAdmin();

  return (
    <div className="">
      <div className="flex gap-10 ">


      <div className="w-64 min-h-screen bg-[#71b5c3] text-black">
          <ul className="text-lg">
          
           
            {
              isAdmin?<>
               <li>
              <Link to={"dashboard/myprofile"}>My Profile</Link>
             </li>
              
               <li>
              <Link to={"dashboard/addpackage"}>Add Package</Link>
            </li>
            <li>
              <Link to={"dashboard/manageuser"}>Manage Users</Link>
            </li>
              </>
              :
              <>
               <li>
              <Link to={"dashboard/myprofile"}>My Profile</Link>
              </li>
            <hr />
            <li>
              <Link to={"dashboard/booking"}>My Booking</Link>
            </li>
            <hr />
            <li>
              <Link to={"dashboard/wishlist"}>My Wishlist</Link>
            </li>
            <hr />
            </>
            }
            <hr />
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            

          </ul>
        </div>
      <div>
          <Outlet></Outlet>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
