// components/WhyUsCard.tsx
interface WhyUsCardProps {
  image: string;
  title: string;
}

const WhyUsCard: React.FC<WhyUsCardProps> = ({ image, title }) => {
  return (
    <div className="p-4 md:w-1/4 sm:w-1/2">
      <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
        <div className="flex justify-center">
          <img
            src={image}
            //className="w-32 mb-3"
            alt={title}
          />
        </div>
        <h2 className="title-font font-regular text-2xl text-gray-600 text-center">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default WhyUsCard;
