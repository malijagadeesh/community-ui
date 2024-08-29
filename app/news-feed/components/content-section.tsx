import CardGrid from "./card-grid";
import MainCard from "./main-card";

type Article = {
  id: string;
  name: string;
};

export type Source = {
  source: Article;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};


const ContentSection: React.FC = async () => {
  //https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=164c4bb6f4574c56adbccd05f431304e
  const newsData = await fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=164c4bb6f4574c56adbccd05f431304e')
  .then(response => response.json())
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
        <MainCard />
        <CardGrid cards={newsData.articles as Source[]} />
      </div>
    </div>
  );
};

export default ContentSection;
