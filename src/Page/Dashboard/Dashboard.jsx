
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import { useState } from "react";

const Dashboard = () => {

  const [isAdmin] = useAdmin();
   const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
     <div className="flex flex-col md:flex-row min-h-screen">
      {/* Mobile Sidebar Toggle Button */}
      <button
        className="md:hidden p-4 bg-[#71b5c3] text-white"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰ Menu
      </button>

      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "block" : "hidden"
        } md:block w-full md:w-64 bg-[#71b5c3] text-black p-4`}
      >
        <ul className="text-lg space-y-4">
          {isAdmin ? (
            <>
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
          ) : (
            <>
              <li>
                <Link to={"dashboard/myprofile"}>My Profile</Link>
              </li>
              <li>
                <Link to={"dashboard/booking"}>My Booking</Link>
              </li>
              <li>
                <Link to={"dashboard/wishlist"}>My Wishlist</Link>
              </li>
            </>
          )}
          <li>
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
