import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";
import GoogleLoing from "../GoogleLogin/GoogleLogin";

const Login = () => {

 const {signIn} = useContext(AuthContext);
 const navigate = useNavigate();
 const location = useLocation

 const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) =>{
  event.preventDefault ();
  const form = event.target;
  const email =form.email.value;
  const password = form.password.value;
  console.log(email ,password);
  signIn(email,password)
  .then(result =>{
    const user = result.user;
    console.log(user);
    navigate(from,{replace:true});
  })
    };
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-[#2EC1DB] p-2 ">
       
        Welcome to Trips Fables! Please login.
      </h1>
      <div className="hero  bg-base-200">
        <div className="hero-content lg:h-[500px] flex-col lg:flex-row-reverse">
          <div className=" w-full max-w-sm bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="border-2 p-2"
                  required
                  name="password"
                />
              </div>
              <div className="form-control mt-6">
                <button className="p-2 border-2 bg-[#2EC1DB] shadow-2xl">
                  Login
                </button>
              </div>

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  New menber?{" "}
                  <span className="text-[#205c67]">
                    <Link to={"/signup"}>Sign up</Link>
                  </span>
                </a>
              </label>
              <GoogleLoing></GoogleLoing>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
