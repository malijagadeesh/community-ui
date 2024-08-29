'use client';
import React from 'react';
import Button from '../button';
import Image from 'next/image';
interface EventDetailProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  when: string;
  where: string[];
  tickets?: string[];
  onBuyTicketsClick?: () => void;
}

const EventDetail = ({
  imageSrc,
  imageAlt,
  title,
  description,
  when,
  where,
  tickets,
}: EventDetailProps) => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-2/3 px-4 mb-8 lg:mb-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1040}
              height={500}
            />
          </div>
          <div className="w-full lg:w-1/3 px-4">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-lg mb-6">{description}</p>
            <div className="mb-6">
              <p className="text-xl font-bold mb-2">When:</p>
              <p className="text-lg">{when}</p>
            </div>
            <div className="mb-6">
              <p className="text-xl font-bold mb-2">Where:</p>
              {where.map((line, index) => (
                <p
                  key={index}
                  className="text-lg"
                >
                  {line}
                </p>
              ))}
            </div>
            {/* <div className="mb-6">
              <p className="text-xl font-bold mb-2">Tickets:</p>
              {tickets.map((ticket, index) => (
                <p
                  key={index}
                  className="text-lg"
                >
                  {ticket}
                </p>
              ))}
            </div> */}
            <Button onClick={() => {}}>Buy Tickets</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
