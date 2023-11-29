import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Page/Home/Home";
import Community from "../Page/Community/Community";
import Blogs from "../Page/Blogs/Blogs";
import About from "../Page/About/About";
import Contact from "../Page/Contact/Contact";
import Login from "../Page/Login/Login";
import Signup from "../Page/Signup/Signup";
import PackageDetailes from "../Page/Packags/PackageDetails/PackageDetailes";
import TourDetailes from "../Page/TourType/TourDetailes";
import Dashboard from "../Page/Dashboard/Dashboard";
import MyProfile from "../Page/Dashboard/MyProfile";
import MyBooking from "../Page/Dashboard/MyBooking";
import MyWishlist from "../Page/Dashboard/MyWishlist";
import AddPackage from "../Page/Dashboard/AddPackage";
import ManageUser from "../Page/Dashboard/ManageUser";
import MyAssigned from "../Page/Dashboard/MyAssigned";
import PrivetRoutes from "./PrivetRoutes/PrivetRoutes";
import Allpackage from "../Page/AllPackage/Allpackage";




  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'community',
          element:<Community></Community>
        },
        {
          path:'blogs',
          element:<Blogs></Blogs>
        },
        {
          path:'about',
          element:<About></About>
        },
        {
          path:'contact',
          element:<Contact></Contact>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<Signup></Signup>
        },
        
        {
         path:'/detailes/:_id',
         element:<PackageDetailes></PackageDetailes>,
         loader: ()=> fetch('http://localhost:5000/all')
         
        },
        {
          path:'/tourDetails/:tourType',
          element:<TourDetailes></TourDetailes>,
          loader: ()=> fetch('http://localhost:5000/all')
        },
        {
          path:'/allpacakge',
          element:<Allpackage></Allpackage>
        }
       
        
      ],
     
    },
    {
      path:'dashboard',
        element:<PrivetRoutes><Dashboard></Dashboard></PrivetRoutes>,
        children:[
          {
              path:'dashboard/myprofile',
              element:<MyProfile></MyProfile>
            },
            {
              path:'dashboard/booking',
              element:<MyBooking></MyBooking>
            },
            {
              path:'dashboard/wishlist',
              element:<MyWishlist></MyWishlist>
            },
            {
              path:'dashboard/addpackage',
              element:<AddPackage></AddPackage>
            },
            {
              path:'dashboard/manageuser',
              element:<ManageUser></ManageUser>
            },
            {
              path:'dashboard/myassigned',
              element:<MyAssigned></MyAssigned>
            }
    
        ]
    }
   
   
  ]);