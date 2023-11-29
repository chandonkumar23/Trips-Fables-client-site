import { useLoaderData, useParams } from "react-router-dom";
import TourDetailesCart from "./TourDetailesCart";


const TourDetailes = () => {
    const data = useLoaderData();
    const {tourType}=useParams();
    const findData = data?.filter((item) => item.tourType === tourType);
    console.log(findData)
    return (
        <div>
            <div className="grid lg:grid-cols-2">
            {
              findData?.map(data =><TourDetailesCart key={data._id} data={data}></TourDetailesCart>)
            }
            </div>
        </div>
    );
};

export default TourDetailes;