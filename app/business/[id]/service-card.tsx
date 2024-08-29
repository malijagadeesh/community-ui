// components/ServiceCard.tsx
interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="bg-white shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6 text-center">
        <h3 className="text-xl font-medium text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
