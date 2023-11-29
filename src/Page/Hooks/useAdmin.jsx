import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";
import UserAxioxSecure from "./UserAxioxSecure";


const useAdmin = () => {
    const {user} = useContext(AuthContext)
   const axiosSecure = UserAxioxSecure();
    const {data: isAdmin} = useQuery({
        queryKey:[user?.email,'isAdmin'],
        queryFn: async()=>{
        const res = await axiosSecure.get(`/users/admin/${user.email}`);
       console.log(res.data);
        return res.data?.admin;
        }
    })
    return[isAdmin ]
   
};
export default useAdmin;