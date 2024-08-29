// components/Subscription.tsx
import React from 'react';
import Link from 'next/link';
import { MdOutlineGroupAdd } from 'react-icons/md';

interface SubscriptionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const Subscription: React.FC<SubscriptionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="w-full sm:w-80 md:w-96 lg:w-1/3 mx-auto">
      <div className="p-6 bg-white border shadow-md flex flex-col h-full">
        <div className="flex-grow">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
        </div>
        <Link
          href={buttonLink}
          className="inline-flex w-1/2 items-center px-4 py-2 bg-green-700 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-white transition duration-300"
        >
          <MdOutlineGroupAdd className="w-5 h-5 fill-current mr-2" />
          <span>{buttonText}</span>
        </Link>
      </div>
    </div>
  );
};

export default Subscription;
