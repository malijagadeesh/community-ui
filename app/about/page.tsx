// pages/about.tsx
import { FC } from 'react';

const AboutPage: FC = () => {
  return (
    <div className="bg-white container mx-auto">
      <header className="bg-green-500 text-white text-center py-12">
        <h1 className="text-4xl font-bold mt-16">About Us</h1>
      </header>

      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Mission And Values</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Our mission is to provide exceptional community services with a focus
          on availability, reliability, and support.
        </p>
        <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold">85+</h3>
            <p className="text-gray-700">Specialists</p>
          </div>
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold">25+</h3>
            <p className="text-gray-700">Years of Experience</p>
          </div>
        </div>
      </section>

      <section className="bg-green-500 text-white py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Our Vision</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto">
        To connect local businesses with the community and provide a platform for businesses to showcase their products and services.
        </p>
      </section>

      {/* Community Involvement Section */}
      <section className="bg-blue-50 py-12 px-4">
        <h2 className="text-2xl font-bold text-center">
          Community Involvement
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          We believe in giving back to the community. Our outreach programs aim
          to improve health and well-being in our local area.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 max-w-4xl mx-auto">
          <div className="p-4 shadow-lg  bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Free Health Clinics</h3>
            <p className="text-gray-700 mt-2">
              Providing free business registration and consultations to underserved
              communities.
            </p>
          </div>
          <div className="p-4 shadow-lg  bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Health Education Workshops</h3>
            <p className="text-gray-700 mt-2">
              Organizing workshops to educate the public on various health
              topics.
            </p>
          </div>
          <div className="p-4 shadow-lg  bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Charity Fundraising Events</h3>
            <p className="text-gray-700 mt-2">
              Hosting events to raise funds for local community causes and
              charities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
