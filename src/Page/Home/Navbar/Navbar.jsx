import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Authprovider/Authprovider";
import Swal from "sweetalert2";
import { BiLogOut } from "react-icons/bi";


const Navbar = () => {

  const {user,logOut} = useContext(AuthContext)
  console.log(user)
  const handleLogOut = () =>{
     logOut()
     .then(Swal({
      title: "Log Out ",
      icon: "success",
      button:"ok"
    }))
  .catch()
  }
  return (
    <div>
      <div className="navbar  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#64A893] rounded-box w-52 text-xl"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/community"}>Community</Link>
              </li>
              <li>
                <Link to={"/blogs"}>Blogs</Link>
              </li>
              <li>
                <Link to={"/about"}>About Us</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact Us</Link>
              </li>
              <li>
                {
                  user ? <Link onClick={handleLogOut}>Logout</Link>
                  : <Link to={"/login"}>Login</Link>
                }
              </li>
            </ul>
          </div>
          <div className="flex items-center">
          <img src="https://i.postimg.cc/qvgWBtWP/Travelite-removebg-preview-1.png" alt="" />
          <h2 className="text-4xl w-full text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-[#2EC1DB] to-sky-500/30">Trips.</h2>
         
          
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-lg">
          <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/community"}>Community</Link>
              </li>
              <li>
                <Link to={"/blogs"}>Blogs</Link>
              </li>
              <li>
                <Link to={"/about"}>About Us</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact Us</Link>
              </li>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
              
             
             
          </ul>

        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="" alt="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52"
            >
             
            
            {
              user? <li>Name: {user.displayName}</li>:<></>
            }
            {
              user? <li>Gmail: {user.email}</li>:<></>
            }

              <li className="bg-[#2EC1DB]">
                {
                  user ? <Link to={"/dashboard"}>Dashboard</Link>:<></>
                }
              </li>
              <li >
                {
                  user ? <Link onClick={handleLogOut}>Logout<BiLogOut /></Link>
                  : <Link to={"/login"}>Login</Link>
                }
              </li> 
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
