// components/BusinessSummary.tsx
import Link from 'next/link';
import React from 'react';

interface BusinessSummaryProps {
  name: string;
  description: string;
  image: string;
  location: string;
  contactLink: string;
}

const BusinessSummary: React.FC<BusinessSummaryProps> = ({
  name,
  description,
  image,
  location,
  contactLink,
}) => {
  return (
    <div className="p-4 border shadow-lg">
      <img
        src={image}
        alt={`${name} Image`}
        className="w-full h-48 object-cover"
      />
      <h3 className="text-xl font-semibold mt-4">{name}</h3>
      <p className="text-gray-700 mt-2">{description}</p>
      <p className="text-gray-600 mt-2">{location}</p>
      <Link
        href={"/business/" + name}
        className="mt-2 inline-flex w-1/2 items-center px-4 py-2 bg-green-700 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-white transition duration-300"
      >
        <span>View details </span>
      </Link>
    </div>
  );
};

export default BusinessSummary;
