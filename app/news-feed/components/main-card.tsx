import Card from './card';

const MainCard: React.FC = () => {
  return (
    <Card
      urlToImage="https://ichef.bbci.co.uk/news/1024/branded_news/e1db/live/659aed50-6453-11ef-91f3-273f9f80a920.jpg"
      title="UK Faces New Challenges with Immigration Policy"
      description="Meet the Republican dissidents fighting to push Donald Trump out of office—and reclaim their party"
      url="#"
      isMainCard
    />
  );
};

export default MainCard;
