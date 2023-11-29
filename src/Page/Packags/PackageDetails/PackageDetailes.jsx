import { useLoaderData, useParams } from "react-router-dom";
import PackageDetailesCart from "./PackageDetailesCart";

const PackageDetailes = () => {
  const packageItems = useLoaderData();
 
  const { _id } = useParams();

  const packags = packageItems?.find((item) => item._id === _id);

  return (
    <div className="">
      <div className="mb-12">
        <PackageDetailesCart packags={packags}></PackageDetailesCart>
      </div> 
    </div>
  );
};

export default PackageDetailes;
