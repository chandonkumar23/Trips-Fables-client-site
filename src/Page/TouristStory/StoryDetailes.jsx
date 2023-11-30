import StoryDetalesCart from "./StoryDetalesCart";
import { useLoaderData, useParams } from "react-router-dom";


const StoryDetailes = () => {
    const data = useLoaderData();
    const {_id}=useParams();
    const findData = data?.filter((item) => item._id === _id);
    console.log(findData)
    return (
        <div>
            <div className="grid lg:grid-cols-2">
            {
              findData?.map(data =><StoryDetalesCart key={data._id} data={data}></StoryDetalesCart>)
            }
            </div>
        </div>
    );
};

export default StoryDetailes;