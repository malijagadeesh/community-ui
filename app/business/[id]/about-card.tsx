// components/AboutSection.tsx
interface AboutSectionProps {
  title: string;
  content: string;
  image: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  content,
  image,
}) => {
  return (
    <section
      className=""
      id="aboutus"
    >
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              {title}
            </h2>
            <p className="mt-4 text-gray-600 text-lg">{content}</p>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src={image}
              alt="About Us"
              className="object-cover shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
