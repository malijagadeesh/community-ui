import Image from 'next/image';
import React from 'react';
import Button from '../elements/button/button';
import Link from 'next/link';

const KeyFeatures = () => {
  const features = [
    {
      title: 'Community News Feed',
      description:
        'Get the latest news and announcements from your neighborhood. Stay informed about everything happening in your community, from local government updates to neighborhood events.',
      imgSrc: '/community-news.jpg',
      buttonText: 'Read More',
      buttonLink: '/news-feed',
    },
    {
      title: 'Local Event Calendar',
      description:
        "Explore a calendar of upcoming events and activities in your area. Whether it's a local festival, a community meeting, or a family-friendly event, there's always something exciting happening nearby.",
      imgSrc: '/community-events.jpg',
      buttonText: 'View Events',
      buttonLink: '/local-events',
    },
    {
      title: 'Neighborhood Discussions',
      description:
        'Engage in meaningful conversations with your neighbors. Share your ideas, ask questions, and connect with others to build a stronger, more connected community.',
      imgSrc: '/discussions.jpg',
      buttonText: 'Join the Conversations',
      buttonLink: '/join-discussions',
    },
    {
      title: 'Local Business Directory',
      description:
        'Discover and support local businesses with our comprehensive directory. Find everything from restaurants to service providers, and explore special offers and services available right in your neighborhood.',
      imgSrc: '/business-directory.jpg',
      buttonText: 'Explore Businesses',
      buttonLink: '/business',
    },
  ];

  return (
    <section
      id="features"
      className="container mx-auto px-4 space-y-6 py-8 md:py-12 lg:py-20 xl:flex xl:flex-row xl:space-x-6 xl:space-y-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative overflow-hidden border bg-white select-none hover:shadow hover:shadow-teal-200 p-4"
          >
            <div className="flex flex-col sm:flex-col lg:flex-row  gap-6">
              <div className="mb-4">
                <Image
                  src={feature.imgSrc}
                  alt={feature.imgSrc}
                  width={400}
                  height={400}
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-xl">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
                <button className="mt-2 md:mt-5 p-2 px-3 bg-black text-white font-bold text-sm hover:bg-purple-800">
                  <Link href={feature.buttonLink}>{feature.buttonText}</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
