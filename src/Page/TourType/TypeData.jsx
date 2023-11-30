import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const TypeData = ({type}) => {
    const {image,tourType} = type;
    return (
        <div>
           <div >
            <Link to={`/tourDetails/${tourType}`}><img  className="h-[200px] relative rounded-md border-2 border-[#2EC1DB]" src={image}  alt="" /></Link>
            <h3 className="absolute "> {tourType}</h3>
           </div>
        </div>
    );
};

export default TypeData;