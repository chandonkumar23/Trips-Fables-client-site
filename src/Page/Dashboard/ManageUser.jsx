import { useQuery } from "@tanstack/react-query";
import UserAxioxSecure from "../Hooks/UserAxioxSecure";
import Swal from "sweetalert2";



const ManageUser = () => {
    const axiosSecure = UserAxioxSecure();
  const { data: users = [],refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;

    }
})
const handleAddmin = user =>{
axiosSecure.patch(`/users/admin/${user._id}`)
.then (res =>{
    console.log(res.data)
    if(res.data.modifiedCount > 0){
        refetch()
        
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} ia an Addmin Now`,
            showConfirmButton: false,
            timer: 1500
          });
    }
})
}


   

    return (
        <div>
               <h2 className="text-4xl w-full text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-[#2EC1DB] to-sky-500/30">Manage Users.</h2>
            <p> Total Users: {users.length}</p>

            <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Role</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                users.map(user =><tr key={user._id}>
                    <th></th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={user.photo}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{user.name}</div>
                        </div>
                      </div>
                    </td>
                  
                    <td>
                      <p>{user.email}</p>
                    </td>    
                    <td className="flex gap-1">              
                    {user.role === 'admin'? <button className="btn">Admin</button>: <button
                      onClick={()=>handleAddmin(user)}
                      className="btn">Make Admin
                      </button>  }          
                     <button className="btn">Make Tour Guide</button>
                    </td>
                   
                  </tr>)
            }
          </tbody>
        </table>
      </div>
             


        </div>
    );
};

export default ManageUser;