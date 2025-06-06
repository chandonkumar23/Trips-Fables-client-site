import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

/* eslint-disable react/prop-types */
const TypeData = ({ type }) => {
    const { image, tourType } = type;
    return (
        <div>
            <div className="flex justify-center items-center  ">
                <div className="relative w-full max-w-[250px] h-[200px]">
                    <Link to={`/tourDetails/${tourType}`}>
                        <img
                            className="w-full h-full object-cover rounded-md border-2 border-[#2EC1DB]"
                            src={image}
                            alt={tourType}
                        />
                    </Link>
                    <h3 className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 px-2 py-1 rounded-md text-sm flex items-center gap-1">
                        {tourType} <FaArrowRight />
                    </h3>

                </div>
            </div>


        </div>
    );
};

export default TypeData;