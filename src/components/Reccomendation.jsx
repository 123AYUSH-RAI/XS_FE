// Recommendation.js
import React, { useState, useEffect } from 'react';

import { recommend } from '../react-query/api/peroperty';
const Recommendations = ({recommended}) => {
    const [called , setCalled] = useState(true)

  const [recommendations, setRecommendations] = useState([]);
useEffect(()=>{

    async function recommending(){
        try
        {
            const localproper= localStorage.getItem("viewedProperties");

            const data = await recommend(localproper)
         
            setRecommendations(data);
            console.log(recommendations)
        }
        catch(e){
            console.log(e)
        }
        setCalled(false);
    }
    called&& recommending()
},[])

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Recommended Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recommendations.length > 0 ? (
          recommendations.map(property => (
            <div key={property.id} className="bg-white p-4 shadow rounded">
              <h3 className="text-xl font-semibold">{property.title}</h3>
              <p>Location: {property.location}</p>
              <p>Price: ${property.price} / night</p>
              <p>Category: {property.category}</p>
              <p>Amenities: {property.amenities.join(', ')}</p>
            </div>
          ))
        ) : (
          <p>No recommendations available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Recommendations;
