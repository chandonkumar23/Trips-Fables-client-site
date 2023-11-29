
import { Link } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {

 const [isAdmin] = useAdmin();

  return (
    <div>
      <div>
        <div className="w-64 min-h-screen bg-[#2EC1DB]">
          <ul className="text-lg">
            <li>
              <Link to={"/myprofile"}>My Profile</Link>
            </li>
            <li>
              <Link to={"/booking"}>My Booking</Link>
            </li>
            <li>
              <Link to={"/wishlist"}>My Wishlist</Link>
            </li>
           
           
            {
              isAdmin?<>
               <li>
              <Link to={"/addpackage"}>Add Package</Link>
            </li>
            <li>
              <Link to={"/manageuser"}>Manage Users</Link>
            </li>
              </>
              :
              <>
               <li>
              <Link to={"/myprofile"}>My Profile</Link>
            </li>
            <li>
              <Link to={"/booking"}>My Booking</Link>
            </li>
            <li>
              <Link to={"/wishlist"}>My Wishlist</Link>
            </li></>
            }
            

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
