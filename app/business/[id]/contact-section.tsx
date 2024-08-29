// components/ContactSection.tsx
interface ContactSectionProps {
  address: string;
  mapLink: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  address,
  mapLink,
}) => {
  return (
    <section
      className="bg-gray-100"
      id="contactUs"
    >
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Contact Us
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Find Us on Google Maps
            </a>
            <p className="text-gray-700 mt-4">{address}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
