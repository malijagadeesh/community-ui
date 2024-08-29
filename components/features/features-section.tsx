import React from 'react';
import KeyFeatures from './features';

type Props = {};

function FeaturesSection({}: Props) {
  return (
    <section
      id="features"
      aria-label="What our customers are saying"
      className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-4xl tracking-tight text-slate-900 sm:text-4xl">
          Explore LocalLoop's Key Features
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          Discover everything your city has to offer, all in one place.
        </p>
      </div>
      <KeyFeatures />
    </section>
  );
}

export default FeaturesSection;
