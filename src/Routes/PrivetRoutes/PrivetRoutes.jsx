/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation ();

    if(loading){
        return<span className="loading loading-spinner text-info"></span>
    }

    if(user){
        return children;
    }
    return <Navigate to={"/login"} state={{from:location}}></Navigate>
};

export default PrivetRoutes;