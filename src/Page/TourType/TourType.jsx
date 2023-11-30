
import { useEffect, useState } from 'react';
import TypeData from './typeData';
const TourType = () => {
  const [types , setTypes] = useState([])
  useEffect(() =>{
     fetch('http://localhost:5000/tourType')
     .then (res => res.json())
     .then(data => setTypes(data))
     
 
  },[])
    return (
        <div className="mb-36">
           <h2 className="text-center font-bold text-xl md:text-3xl lg:text-5xl mb-24">
          Tour <span className="text-[#2EC1DB]">Type</span>
        </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4  gap-3 pt-10'>
          {
            types.map(type =><TypeData key={type._id} type={type}></TypeData>)
          }
          </div>
       </div>
        
      
    );
};

export default TourType;