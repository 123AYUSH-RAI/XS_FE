import React from 'react';
import { useLocation } from 'react-router-dom';

const PropertyDetail = () => {
  const location = useLocation();
  const property = location.state;

  if (!property) {
    return <p>Property details are not available.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
  <h1 className="text-4xl font-bold mb-6 text-center transition-transform duration-300 hover:scale-105 hover:text-blue-600">
    {property.title}
  </h1>
  
  <div className="overflow-hidden rounded-lg shadow-lg mb-6">
    <img 
      src={property.image} 
      alt={property.title} 
      className="w-full h-72 object-contain transition-transform duration-500 ease-in-out transform hover:scale-110"
    />
  </div>
  
  <p className="text-lg text-center mb-1 transition-colors duration-300 hover:text-blue-500">
    {property.location}
  </p>
  
  <p className="text-2xl font-semibold mt-2 text-center transition-transform duration-300 hover:scale-105 hover:text-blue-600">
    {property.price}
  </p>
  
  <p className="mt-4 text-base text-justify transition-all duration-300 hover:underline">
    {property.description}
  </p>
</div>




  );
};

export default PropertyDetail;
