
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
        <div className="pt-10 mb-10">
           <h2 className="text-center font-bold text-xl md:text-3xl lg:text-5xl">
          Tour <span className="text-[#2EC1DB]">Type</span>
        </h2>
          <div className='flex items-center pt-10 gap-3'>
          {
            types.map(type =><TypeData key={type.id} type={type}></TypeData>)
          }
          </div>
       </div>
        
      
    );
};

export default TourType;