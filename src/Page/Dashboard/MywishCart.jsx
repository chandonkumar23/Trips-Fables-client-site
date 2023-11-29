/* eslint-disable react/prop-types */
const MywishCart = ({book}) => {
    const { image, price, tripTitle,tourType } = book;
    return (
        <div>
            <div className=" w-96 bg-base-100 border-2 shadow-sm mb-10">
        <figure>
          <img className="h-[200px] w-full" src={image} alt="" />
          <div className="flex items-center">
         
            </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{tripTitle}</h2>
          <p>{tourType}</p>
          <p><span className="font-bold">price:</span> {price}.TK</p>
          <div className="card-actions justify-end">
            <button className="bg-[red]">delete</button>
            <button className="bg-[#64A893]">visite</button>
        
          </div>
        </div>
        
      </div>
        </div>
    );
};

export default MywishCart;