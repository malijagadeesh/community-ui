import Link from "next/link";

// components/HeroSection.tsx
interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  backgroundImage,
}) => {
  return (
    <div
      className="relative w-full h-[320px]"
      id="home"
    >
      <div className="absolute inset-0 opacity-70">
        <img
          src={backgroundImage}
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2">
            {title}
          </h1>
          <p className="font-regular text-xl mb-8 mt-4">{subtitle}</p>
          <Link
            href={buttonLink}
            className="px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 transition duration-200"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
