import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const Login = () => {

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation
  const [showPassword, setShowPassword] = useState(false);

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        if (signIn) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login",
            showConfirmButton: false,
            timer: 1500
          });
        }
        navigate(from, { replace: true });
      })
  };
  return (
    <div className="mb-5">
      <h1 className="text-3xl font-bold text-[#2EC1DB] p-2 ">

        Welcome to Trips Fables! Please login.
      </h1>
      <div className="hero bg-base-300">
        <div className="hero-content lg:h-[500px] flex-col lg:flex-row-reverse">
          <div className="w-full max-w-sm bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              {/* Email Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your E-mail"
                  className="border-2 p-2"
                  required
                  name="email"
                />
              </div>

              {/* Password Field with Eye Toggle */}
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="border-2 p-2 w-full pr-10"
                  required
                  name="password"
                />
                <span
                  className="absolute right-3 top-[72%] transform -translate-y-1/2 white cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {/* Login Button */}
              <div className="form-control mt-6">
                <button className="p-2  bg-[#2EC1DB] text-black shadow-2xl">
                  Login
                </button>
              </div>

              {/* Signup Link */}
              <label className="label">
                New member?{" "}
                <span className="text-[#205c67] ml-1">
                  <Link to={"/signup"}>Sign up</Link>
                </span>

              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
