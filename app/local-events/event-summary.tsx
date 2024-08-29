// components/EventSummary.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface EventSummaryProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  when: string;
  href: string;
}

const EventSummary: React.FC<EventSummaryProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  when,
  href,
}) => {
  return (
    <div className="bg-white shadow-md overflow-hidden cursor-pointer">
      <Link
        href={href}
        passHref
      >
        <Image
          className="w-full h-48 object-cover"
          src={imageSrc}
          alt={imageAlt}
          width={640}
          height={320}
        />
        <div className="p-4">
          <p className="text-md text-gray-500">{when}</p>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-lg text-gray-400 mb-2">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default EventSummary;
