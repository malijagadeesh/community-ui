// components/BusinessList.tsx
import React from 'react';
import BusinessSummary from './business-summary';
import Link from 'next/link';

interface Business {
  name: string;
  description: string;
  image: string;
  location: string;
  contactLink: string;
}

interface BusinessListProps {
  businesses: Business[];
}

const BusinessList: React.FC<BusinessListProps> = ({ businesses }) => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Businesses
        </h2>
        <button className="mt-2 md:mt-5 p-2 px-3 my-4 bg-green-700 text-white font-bold text-sm hover:bg-green-500">
          <Link href="/register-business">+ Register your business</Link>
        </button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businesses.map((business, index) => (
            <BusinessSummary
              key={index}
              name={business.name}
              description={business.description}
              image={business.image}
              location={business.location}
              contactLink={business.contactLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessList;
