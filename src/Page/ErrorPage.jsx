
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
          
        <img className="h-[400px] w-[1800px]" src="https://i.postimg.cc/Fzmv5xFx/depositphotos-49543645-stock-photo-404-error.webp" alt="" />
     <div className="flex justify-center mx-auto">   <button className="btn bg-[#2EC1DB] text-black"><Link to={'/'}>Back Home</Link></button></div>
        </div>
    );
};

export default ErrorPage;