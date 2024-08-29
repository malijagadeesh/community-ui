import Card from "./card";
import { Source } from "./content-section";

interface CardGridProps {
  cards: Source[]; // Define the expected props
}

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  return (
    <div className="sm:col-span-7 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5">
      {cards.map((card, index) => (
        <Card
          key={index}
          urlToImage={card.urlToImage}  // Access the correct property for the image
          title={card.title}
          url={card.url}
          description={card.description}
          publishedAt={card.publishedAt}
          // Access the correct property for the link
        />
      ))}
    </div>
  );
};

export default CardGrid;
