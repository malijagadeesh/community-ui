import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  urlToImage: string;
  title: string;
  description: string;
  url: string;
  isMainCard?: boolean;
  publishedAt?: string; // Optional prop for the date
}

const Card: React.FC<CardProps> = ({
  urlToImage,
  title,
  description,
  url,
  isMainCard = false,
  publishedAt,
}) => {
  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString()
    : 'Unknown Date';

  return (
    <div
      className={`${isMainCard ? 'sm:col-span-5' : 'h-40'} ${
        isMainCard ? '' : 'relative'
      }`}
    >
      <Link
        href={url || '#'}
        passHref
      >
        <Image
          src={urlToImage}
          alt={`Image for ${title}`} // Improved alt text
          width={500}
          height={300}
          className={`bg-cover text-center overflow-hidden cursor-pointer ${
            isMainCard ? 'min-h-[300px]' : ''
          }`}
          title={title}
        />
      </Link>
      <p className="text-gray-400 text-base mt-2">{formattedDate}</p>
      {!isMainCard && (
        <Link
          href={url || '#'}
          passHref
        >
          <div className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out">
            {title}
          </div>
        </Link>
      )}
      {isMainCard && (
        <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div>
            <Link
              href={url || '#'}
              passHref
            >
              <div className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                Election
              </div>
            </Link>
            <Link
              href={url || '#'}
              passHref
            >
              <div className="block text-gray-900 font-bold text-2xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                {title}
              </div>
            </Link>
            {description && (
              <p className="text-gray-700 text-base mt-2">{description}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
