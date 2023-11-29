import Swal from "sweetalert2";
import { axiosSecure } from "../Hooks/UserAxioxSecure";

/* eslint-disable react/prop-types */
const ManageCart = ({book}) => {
    const {_id,name,email,photo}=book;

    const handleMakeAdmin = () =>{
    axiosSecure.patch(`/users/admin/${_id}`)
    .then(res =>{
        console.log(res.data)
        if(res.data.modifiedCount> 0){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${name} ia an Addmin Now`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
    }

  return (
    <div>
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
            <tr>
              <th></th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{name}</div>
                  </div>
                </div>
              </td>
            
              <td>

                <p>{email}</p>
              </td>
             
              <td className="flex gap-1">
               
               <button onClick={handleMakeAdmin} className="btn">Make Admin</button>
              
               <button className="btn">Make Tour Guide</button>
              </td>
             
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCart;
